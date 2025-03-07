"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormSection from "../_components/FormsSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { chatSession } from "@/utils/AiModel";
import { useUser } from "@clerk/nextjs";// Renamed import to avoid conflict

interface PROPS {
    params: {
        "template-slug": string;
    };
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === props.params["template-slug"]
    );

    const [loading, setLoading] = useState(false);
    const [AIOutput, setAIOutput] = useState<string>(""); // Keeping it as AIOutput
    const { user } = useUser();

    const GenerateAIContent = async (formData: any) => {
        setLoading(true);
        try {
            const SelectedPrompt = selectedTemplate?.aiPrompt;
            const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

            const result = await chatSession.sendMessage(FinalAIPrompt);
            const responseText = await result.response.text(); // Get response once

            console.log(responseText);
            setAIOutput(responseText); // No name change

        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="p-10">
            <Link href={"/dashboard"}>
                <Button>
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back
                </Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                {/* FormSection */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={GenerateAIContent}
                    loading={loading}
                />
                {/* OutputSection */}
                <div className="col-span-2">
                    <OutputSection aiOutput={AIOutput} /> {/* No change */}
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;

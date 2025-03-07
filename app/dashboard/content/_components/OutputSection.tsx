import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button'; // Ensure this is correctly imported
import { Copy } from 'lucide-react';

interface Props {
    aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
    const editorRef = useRef<Editor | null>(null);

    useEffect(() => {
        if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance();
            editorInstance.setMarkdown(aiOutput);
        }
    }, [aiOutput]);

    const copyToClipboard = () => {
        if (editorRef.current) {
            const text = editorRef.current.getInstance().getMarkdown();
            navigator.clipboard.writeText(text);
        }
    };

    return (
        <div className="bg-white shadow-lg border rounded-lg">
            <div className="flex justify-between items-center p-5">
                <h2 className="font-medium text-lg">Your Result</h2>
                <Button  className="flex gap-2"
                onClick={()=>navigator.clipboard.writeText(aiOutput)}>
                    <Copy className="w-4 h-4" /> Copy
                </Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your Result will Appear Here"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={() =>
                    console.log(editorRef.current?.getInstance().getMarkdown())
                }
            />
        </div>
    );
}

export default OutputSection;

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center max-w-lg border border-white/20">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
          AI Content Generator
        </h1>
        <p className="text-lg text-white/80 mb-6">
          Generate high-quality content with AI-powered templates.
        </p>
        <Link href="/dashboard">
          <button className="px-6 py-3 text-lg font-semibold bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition">
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles, History, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Now powered by Advanced AI</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
          Craft the Perfect <span className="text-primary">Internship Post</span>
        </h1>
        <p className="text-xl text-slate-800 max-w-2xl mb-10 font-medium">
          Transform your internship milestones into engaging LinkedIn stories. 
          Save history, export as PDF, and use premium templates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/register" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all group"
          >
            Start Building for Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all"
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Powered Generation</h3>
              <p className="text-slate-700 font-medium">Choose your tone, length, and templates to create unique posts every time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <History className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Post History</h3>
              <p className="text-slate-700 font-medium">Never lose a draft. All your generated posts are saved securely in your dashboard.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">One-Click Exports</h3>
              <p className="text-slate-700 font-medium">Download as PDF, TXT or copy formatted text ready for LinkedIn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Sparkles, Copy, Download, FileText, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function GeneratePage() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    duration: "",
    workDone: "",
    skills: "",
    growth: "",
    tone: "professional",
    length: "medium",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data);
        toast.success("Post generated and saved!");
      } else {
        toast.error(data.error || "Generation failed");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.content);
    toast.success("Copied to clipboard!");
  };

  const downloadTxt = () => {
    if (!result) return;
    const element = document.createElement("a");
    const file = new Blob([result.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${result.title}.txt`;
    document.body.appendChild(element);
    element.click();
    toast.success("TXT downloaded!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link href="/dashboard" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Post Details
          </h2>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Name</label>
                <input 
                  type="text" name="name" required
                  value={formData.name} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Role</label>
                <input 
                  type="text" name="role" required
                  value={formData.role} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Software Intern"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Company</label>
                <input 
                  type="text" name="company" required
                  value={formData.company} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Google"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Duration</label>
                <input 
                  type="text" name="duration" required
                  value={formData.duration} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="3 months"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Key Work / Projects</label>
              <textarea 
                name="workDone" required rows={3}
                value={formData.workDone} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="Developed a dashboard using React..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Skills (comma separated)</label>
              <input 
                type="text" name="skills" required
                value={formData.skills} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="React, Next.js, Node.js"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Personal Growth</label>
              <textarea 
                name="growth" required rows={2}
                value={formData.growth} onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="Improved my problem solving skills..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tone</label>
                <select 
                  name="tone" value={formData.tone} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all bg-white"
                >
                  <option value="professional">Professional</option>
                  <option value="excited">Excited</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Length</label>
                <select 
                  name="length" value={formData.length} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all bg-white"
                >
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="detailed">Detailed</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Post
                </>
              )}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl min-h-[500px] flex flex-col">
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Preview</h3>
            
            {result ? (
              <div className="flex-1 whitespace-pre-wrap font-medium leading-relaxed">
                {result.content}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-600 text-center">
                <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                <p>Fill out the form and click generate to see your post here.</p>
              </div>
            )}

            {result && (
              <div className="mt-8 pt-8 border-t border-slate-800 flex flex-wrap gap-3">
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Copy className="w-4 h-4" />
                  Copy Text
                </button>
                <button 
                  onClick={downloadTxt}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Download TXT
                </button>
                <button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors text-sm ml-auto"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

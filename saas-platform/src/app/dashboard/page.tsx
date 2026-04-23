import { auth } from "@/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { Plus, History, ExternalLink, Trash2 } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const userPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.userId, session.user.id))
    .orderBy(desc(posts.createdAt));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-500">Welcome back, {session.user.name}</p>
        </div>
        <Link 
          href="/dashboard/generate" 
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
        >
          <Plus className="w-5 h-5" />
          Generate New Post
        </Link>
      </div>

      {userPosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
          <History className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600">No posts yet</h3>
          <p className="text-slate-500 mb-6">Start by generating your first internship post.</p>
          <Link 
            href="/dashboard/generate" 
            className="text-primary font-bold hover:underline"
          >
            Create one now &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg line-clamp-1">{post.title}</h3>
                  <p className="text-sm text-slate-500">{post.company}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                {post.content}
              </p>
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{new Date(post.createdAt!).toLocaleDateString()}</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md capitalize">
                  {post.tone}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

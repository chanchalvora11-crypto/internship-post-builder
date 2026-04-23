import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { v4 as uuidv4 } from "uuid";

// Variation logic ported from legacy app.py
function generatePostContent(data: any) {
  const { name, role, company, duration, workDone, skills, growth, tone } = data;
  
  const skillsList = skills.split(",").map((s: string) => s.trim()).filter((s: string) => s);

  if (tone === "excited") {
    return `🚀 I'm absolutely thrilled to share that I've completed my internship as a ${role} at ${company}!\n\nThe last ${duration} have been an incredible journey. Getting the chance to work at ${company} was a dream come true!\n\nDuring my time here, I was deeply involved in ${workDone}. It was challenging, fast-paced, and so rewarding!\n\n🔥 Major takeaways:\n${skillsList.map((s: string) => `• ${s}`).join("\n")}\n\nBeyond the technical side, ${growth}. This experience has truly changed my perspective!\n\nA huge thank you to my mentors and the entire team for being so supportive. Can't wait for what's next! ✨\n\n#InternshipSuccess #CareerGrowth #Excited #NewBeginnings #LearningEveryday`;
  } else if (tone === "minimal") {
    return `Reflecting on my ${duration} internship as a ${role} at ${company}.\n\nI'm grateful for the opportunity to have contributed to ${company}'s mission.\n\nFocused on: ${workDone}.\n\nKey learnings:\n${skillsList.map((s: string) => `• ${s}`).join("\n")}\n\nGrowth: ${growth}.\n\nThanks to the team for the guidance.\n\n#Internship #${company.replace(/\s/g, "")} #Career #Growth`;
  } else {
    return `I am pleased to announce the successful completion of my ${role} internship at ${company}.\n\nOver the past ${duration}, I have had the privilege of working with a talented team at ${company} and contributing to meaningful projects.\n\nMy primary responsibilities included ${workDone}, where I was able to apply my skills in a professional environment.\n\nThroughout this experience, I have developed competencies in:\n${skillsList.map((s: string) => `• ${s}`).join("\n")}\n\nOn a personal level, ${growth}. This has significantly contributed to my professional development.\n\nI would like to express my sincere gratitude to my colleagues and mentors for their invaluable support and mentorship.\n\n#ProfessionalGrowth #InternshipCompleted #CareerDevelopment #Networking`;
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const content = generatePostContent(data);

    const newPost = {
      id: uuidv4(),
      title: `${data.role} Internship at ${data.company}`,
      company: data.company,
      content,
      tone: data.tone,
      length: data.length || "medium",
      userId: session.user.id,
    };

    await db.insert(posts).values(newPost);

    return NextResponse.json(newPost);
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

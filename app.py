import random
from flask import Flask, render_template, request, jsonify
from whitenoise import WhiteNoise

app = Flask(__name__)
app.wsgi_app = WhiteNoise(app.wsgi_app, root='static/')

def generate_post(data):
    """
    Generates a LinkedIn post based on user input and selected tone.
    """
    name = data.get('name', '')
    role = data.get('role', '')
    company = data.get('company', '')
    duration = data.get('duration', '')
    work_done = data.get('work_done', '')
    skills = data.get('skills', '').split(',')
    growth = data.get('growth', '')
    tone = data.get('tone', 'professional')

    # Clean up skills
    skills = [s.strip() for s in skills if s.strip()]

    # Variations for more human feel
    if tone == 'excited':
        hooks = [
            f"🚀 I'm absolutely thrilled to share that I've completed my internship as a {role} at {company}!",
            f"✨ What an incredible journey! Just finished my time as a {role} with the amazing team at {company}.",
            f"🎉 Big news! I've officially wrapped up my {role} internship at {company}!"
        ]
        hook = random.choice(hooks)
        
        bodies = [
            f"The last {duration} have been an incredible journey. Getting the chance to work at {company} was a dream come true!",
            f"I've spent the last {duration} learning, growing, and building at {company}. It's been an unforgettable experience!",
            f"Time flies! My {duration} at {company} have been packed with challenges and wins."
        ]
        body = random.choice(bodies)
        
        work_desc = f"During my time here, I was deeply involved in {work_done}. It was challenging, fast-paced, and so rewarding!"
        skills_header = "🔥 Major takeaways:"
        growth_text = f"Beyond the technical side, {growth}. This experience has truly changed my perspective!"
        gratitude = "A huge thank you to my mentors and the entire team for being so supportive. Can't wait for what's next! ✨"
        hashtags = ["#InternshipSuccess", "#CareerGrowth", "#Excited", "#NewBeginnings", "#LearningEveryday", "#TechIntern", "#DreamJob", "#Gratitude", "#FutureReady"]
    
    elif tone == 'minimal':
        hooks = [
            f"Reflecting on my {duration} internship as a {role} at {company}.",
            f"Finished my {role} internship at {company}. Grateful for the experience.",
            f"Wrapping up {duration} at {company} as a {role}."
        ]
        hook = random.choice(hooks)
        body = f"I'm grateful for the opportunity to have contributed to {company}'s mission."
        work_desc = f"Focused on: {work_done}."
        skills_header = "Key learnings:"
        growth_text = f"Growth: {growth}."
        gratitude = "Thanks to the team for the guidance."
        hashtags = ["#Internship", f"#{company.replace(' ', '')}", "#Career", "#Growth", "#Milestone", "#Professional", "#Learning"]
    
    else:  # Professional
        hooks = [
            f"I am pleased to announce the successful completion of my {role} internship at {company}.",
            f"I'm happy to share that I have concluded my tenure as a {role} intern at {company}.",
            f"Following a productive {duration}, I have completed my internship with {company}."
        ]
        hook = random.choice(hooks)
        
        bodies = [
            f"Over the past {duration}, I have had the privilege of working with a talented team at {company} and contributing to meaningful projects.",
            f"This {duration} experience at {company} has provided me with deep insights into the industry and professional workflows.",
            f"I am grateful for the opportunity to have spent the last {duration} learning from the experts at {company}."
        ]
        body = random.choice(bodies)
        
        work_desc = f"My primary responsibilities included {work_done}, where I was able to apply my skills in a professional environment."
        skills_header = "Throughout this experience, I have developed competencies in:"
        growth_text = f"On a personal level, {growth}. This has significantly contributed to my professional development."
        gratitude = "I would like to express my sincere gratitude to my colleagues and mentors for their invaluable support and mentorship."
        hashtags = ["#ProfessionalGrowth", "#InternshipCompleted", "#CareerDevelopment", "#Networking", "#Skills", "#LinkedIn", "#WorkExperience", "#NewChapter"]

    # Format the post
    post_lines = [
        hook,
        "",
        body,
        "",
        work_desc,
        "",
        skills_header
    ]
    
    for skill in skills:
        post_lines.append(f"• {skill}")
    
    post_lines.extend([
        "",
        growth_text,
        "",
        gratitude,
        "",
        " ".join(hashtags)
    ])

    return "\n".join(post_lines)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    post = generate_post(data)
    return jsonify({"post": post})

if __name__ == '__main__':
    app.run(debug=True)

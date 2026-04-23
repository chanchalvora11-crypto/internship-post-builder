# 🚀 Internship Post Builder

**Transform your internship milestones into engaging LinkedIn stories.**

The **Internship Post Builder** is a lightweight, AI-powered tool designed for students and professionals to craft the perfect announcement for their internship completions. By simply filling out a few details about your role and achievements, the tool generates a formatted, LinkedIn-ready post tailored to your chosen tone.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots / Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Project Structure](#project-structure)

---

## 🌟 Overview
Sharing internship updates on LinkedIn can be daunting. This project simplifies the process by automating the writing phase. Whether you want to sound strictly professional or highly enthusiastic, the tool handles the structure, hashtags, and formatting so you can focus on celebrating your success.

---

## ✨ Key Features
- **AI-Powered Generation:** Instant post creation based on your specific role, company, and work.
- **Multiple Tones:** Choose between **Formal**, **Enthusiastic**, or **Casual** vibes to match your personal brand.
- **Local History:** Your last 10 generated posts are saved automatically in your browser (LocalStorage).
- **One-Click Copy:** LinkedIn-friendly formatting with a dedicated copy-to-clipboard feature.
- **Dark Mode Support:** A clean, responsive UI with a toggle for comfortable viewing day or night.

---

## 📸 Screenshots / Demo

Follow the step-by-step workflow of the application below:

### 1. Main Interface
![Landing Page](/screenshots/1.png)
*The clean and minimal landing page where you begin your journey. The UI is designed to be intuitive and focused.*

### 2. Filling Post Details
![Form Input](/screenshots/2.png)
*Enter your name, role, company, and duration. The form guides you through providing the essential details for a great post.*

### 3. Detailing Your Impact
![Work Details](/screenshots/3.png)
*Describe the projects you worked on and the skills you gained. This section provides the "meat" for the AI engine to work with.*

### 4. Selecting Your Tone
![Tone Selection](/screenshots/4.png)
*Choose how you want to sound. The tool offers Formal, Enthusiastic, and Casual options to suit different LinkedIn audiences.*

### 5. Generation in Progress
![Generating State](/screenshots/5.png)
*A simple, real-time indicator shows you that your post is being crafted. No long wait times—just instant results.*

### 6. The Final Result
![Generated Output](/screenshots/6.png)
*Review your generated post in a clean preview card. The text is formatted with proper spacing and relevant hashtags.*

### 7. Managing Your History
![History Section](/screenshots/7.png)
*View and revisit your past 10 posts in the Recent Posts section. You can clear your history or copy old posts at any time.*

---

## 💻 Tech Stack
- **Backend:** Python / Flask
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Styling:** Custom CSS with Tailwind-inspired utility classes
- **Storage:** Browser LocalStorage (for History feature)

---

## ⚙️ Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chanchalvora11-crypto/internship-post-builder.git
   cd internship-post-builder
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python app.py
   ```
5. **Access the tool:** Open `http://localhost:5000` in your browser.

---

## 🚀 Usage
1. Fill in the form with your internship details.
2. Select your desired tone (Formal, Enthusiastic, or Casual).
3. Click **Generate Post**.
4. Review the output and click **Copy to Clipboard**.
5. Paste it directly into LinkedIn and celebrate!

---

## 📂 Project Structure
```text
internship-post-builder/
├── app.py              # Flask server and AI logic
├── requirements.txt    # Project dependencies
├── static/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   └── js/
│       └── script.js   # Client-side logic & history
├── templates/
│   └── index.html      # Main application interface
└── screenshots/        # Project demonstration images
```

---

## 🛠 Future Improvements
- [ ] Integration with LinkedIn API for direct posting.
- [ ] More granular template options for different industries.
- [ ] Export as PDF functionality.

---
*Built with ❤️ for interns everywhere.*

# Internship Post Builder

**Transform your internship milestones into engaging LinkedIn stories.**

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![Flask Version](https://img.shields.io/badge/flask-2.0%2B-green.svg)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Internship Post Builder is a developer-focused tool designed to solve the "blank page problem" for students completing their internships. By synthesizing key achievements into structured LinkedIn updates, it ensures your professional milestones are shared with the right tone and formatting.

---

## Table of Contents
- [Overview](#overview)
- [Why This Project?](#why-this-project)
- [Key Features](#key-features)
- [Screenshots / Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Technical Deep Dive](#technical-deep-dive)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview
Sharing internship updates on LinkedIn is a critical part of building a professional brand, yet many students struggle to find the right balance between humility and self-promotion. This project automates that balance. It takes raw inputs and transforms them into high-quality, formatted posts ready for a professional network.

---

## Why This Project?
As a student developer, I noticed that writing these posts often takes longer than it should. I wanted to build something that:
1. **Saves Time:** Move from raw notes to a finished post in under 30 seconds.
2. **Ensures Consistency:** Maintains a high standard of professional writing.
3. **Respects Privacy:** By leveraging LocalStorage, the tool keeps your data in your browser.

---

## Key Features

### AI-Powered Generation
The core engine uses structured variation logic to ensure every post is unique. It changes the entire sentence structure based on your role and achievements.

### Multi-Tone Selection
- **Formal:** Best for corporate roles and traditional industries.
- **Enthusiastic:** Perfect for startups and high-energy milestones.
- **Casual:** Ideal for sharing a personal journey or a more relaxed team culture.

### History Management
Never lose a draft again. The tool automatically saves your last 10 generations in your browser's LocalStorage.

---

## Screenshots / Demo

### 1. The Workspace
<img src="screenshot1.png" width="600" alt="Landing Page" />
<br><em>The primary workspace designed with a focus on typography and clarity.</em>

### 2. Form Entry
<img src="screenshot2.png" width="600" alt="Form Input" />
<br><em>A clean form layout that guides you through providing essential details.</em>

### 3. Capturing Impact
<img src="screenshot3.png" width="600" alt="Work Details" />
<br><em>Dedicated sections to describe the projects you built and the skills you gained.</em>

### 4. Tone Selection
<img src="screenshot4.png" width="600" alt="Tone Selection" />
<br><em>A simple selector that alters the underlying logic to change the post's tone.</em>

### 5. Generation State
<img src="screenshot5.png" width="600" alt="Generating State" />
<br><em>A simple indicator providing immediate feedback during the generation process.</em>

### 6. Final Output
<img src="screenshot6.png" width="600" alt="Generated Output" />
<br><em>The output card featuring a copy-to-clipboard button for seamless sharing.</em>

### 7. Recent History
<img src="screenshot7.png" width="600" alt="History Section" />
<br><em>The history list acts as a local database for your past generated posts.</em>

---

## Tech Stack
- **Backend Framework:** Flask (Python)
- **Frontend Logic:** Vanilla JavaScript
- **Styling:** Custom CSS3 with CSS Variables
- **Icons:** Lucide Icons
- **Deployment:** Render

---

## Technical Deep Dive

### Client-Side State Management
The project uses a clean implementation of `localStorage` to manage user state.
```javascript
const saveToHistory = (newPost) => {
    let history = JSON.parse(localStorage.getItem('postHistory')) || [];
    history.unshift(newPost);
    if (history.length > 10) history.pop();
    localStorage.setItem('postHistory', JSON.stringify(history));
};
```

---

## Installation & Setup

1. **Clone & Enter:**
   ```bash
   git clone https://github.com/chanchalvora11-crypto/internship-post-builder.git
   cd internship-post-builder
   ```

2. **Environment Setup:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Launch:**
   ```bash
   python app.py
   ```

---

## Deployment
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app`

---

## Project Structure
```text
internship-post-builder/
├── app.py              # Backend API
├── requirements.txt    # Dependencies
├── static/             # Assets
├── templates/          # UI Structure
└── screenshot1-7.png   # Gallery Images
```

---

## License
Distributed under the MIT License.

---
*Built for interns everywhere.*

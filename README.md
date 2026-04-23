# Internship Post Builder

**Transform your internship milestones into engaging LinkedIn stories.**

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![Flask Version](https://img.shields.io/badge/flask-2.0%2B-green.svg)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Internship Post Builder is a developer-focused tool designed to solve the "blank page problem" for students completing their internships. By synthesizing key achievements into structured LinkedIn updates, it ensures your professional milestones are shared with the right tone and formatting.

---

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots / Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [License](#license)

---

## Overview
Sharing internship updates on LinkedIn is a critical part of building a professional brand. This project automates that balance, transforming raw inputs into high-quality, formatted posts ready for a professional network.

---

## Screenshots / Demo

### 1. Main Dashboard (Dark Mode)
<img src="screenshot1.png" width="400" alt="Main Interface" />
<br><em>The updated Dark Mode interface featuring a simplified header and a "Recent Posts" history section at the bottom.</em>

### 2. Clean Form Entry
<img src="screenshot2.png" width="400" alt="Form Input" />
<br><em>A distraction-free form layout designed for quick data entry.</em>

### 3. Achievement Details
<img src="screenshot3.png" width="400" alt="Work Details" />
<br><em>Intuitive fields for describing your projects and the specific skills you mastered.</em>

### 4. Tone & Generation
<img src="screenshot4.png" width="400" alt="Tone Selection" />
<br><em>A simple selector for Formal, Enthusiastic, or Casual tones, paired with a prominent generation button.</em>

### 5. Generation State
<img src="screenshot5.png" width="400" alt="Generating State" />
<br><em>A lightweight feedback state that lets the user know the AI engine is crafting the post.</em>

### 6. Final LinkedIn Post
<img src="screenshot6.png" width="400" alt="Generated Output" />
<br><em>The final generated post with professional formatting, ready to be copied directly to LinkedIn.</em>

### 7. Local Post History
<img src="screenshot7.png" width="400" alt="History Section" />
<br><em>A persistent history of your last 10 generated posts, stored safely in your browser's LocalStorage.</em>

---

## Tech Stack
- **Backend Framework:** Flask (Python)
- **Frontend Logic:** Vanilla JavaScript
- **Styling:** Custom CSS3
- **Icons:** Lucide Icons
- **Deployment:** Render

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

## License
Distributed under the MIT License.

---
*Built for interns everywhere.*

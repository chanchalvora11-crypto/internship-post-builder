# Internship Post Builder 🚀

![App Preview](screenshot.png)

A professional single-page web application built with **Flask**, **HTML**, and **CSS** to help interns craft engaging LinkedIn posts in seconds.

## ✨ Features
- **Professional UI**: Clean design with glassmorphism and smooth animations.
- **Dynamic Content**: Generates posts in Professional, Excited, or Minimal tones.
- **Variation Engine**: Multiple templates ensure unique posts every time.
- **One-Click Copy**: Easily copy the generated post to your clipboard.

## 📁 File Structure
```text
internship1/
├── static/
│   ├── css/
│   │   └── style.css      # Custom styling
│   └── js/
│       └── script.js     # Interactivity logic
├── templates/
│   └── index.html        # Main interface
├── app.py                # Flask server & logic
├── requirements.txt      # Dependencies
└── README.md             # Documentation
```

## 🚀 Deployment (Making it Permanent)

To make this project permanent and accessible to anyone on the internet, you can host it for free using one of these platforms:

### 1. Render (Recommended for Beginners)
1. Create a free account on [Render.com](https://render.com).
2. Connect your GitHub repository.
3. Choose "Web Service".
4. Set the build command to: `pip install -r requirements.txt`
5. Set the start command to: `gunicorn app:app` (you'll need to add `gunicorn` to your `requirements.txt`).

### 2. PythonAnywhere
1. Create a free account on [PythonAnywhere](https://www.pythonanywhere.com).
2. Upload your files or clone from GitHub.
3. Follow their "Flask Web App" setup guide.

---
*Created with productivity in mind.*

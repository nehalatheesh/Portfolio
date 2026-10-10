# 📊 Neha Latheesh - Personal Portfolio Website

A modern, responsive, dark-themed personal portfolio website built with **HTML5**, **CSS3**, **Bootstrap 5**, and vanilla **JavaScript**. Tailored for a **Data Analyst**, fresher, or software developer to showcase profiles, technical skills, machine learning & analytics projects, education, and contact inquiries.

---

## 🌟 Key Highlights & Design Features

- 🎨 **Modern Dark Aesthetic**: High-contrast black canvas (`#090a0f`) with glowing purple (`#a855f7`) and electric cyan (`#38bdf8`) accents.
- 📱 **100% Fully Responsive**: Seamless layout on smartphones, tablets, laptops, and desktop screens using Bootstrap 5's 12-column grid.
- ✨ **Interactive Micro-Animations**:
  - Live animated typewriter effect in the hero section displaying analytical roles.
  - Floating tech chips (`Python`, `SQL`, `Power BI`) on the profile card.
  - Interactive project filtering by category (*All*, *Machine Learning*, *BI & Dashboards*, *Web Analytics*).
  - Bootstrap 5 interactive modal popup for detailed project case studies.
  - Smooth scrolling navigation and floating Back-to-Top button.
- 🛡️ **Zero Broken Image Links**: Built with self-contained, inline SVG illustration and Font Awesome 6 icons.
- 📝 **Contact Form with Validation**: Client-side JavaScript validation with instant input error feedback, loading spinner, and simulated success state. Includes notes for connecting backends (Formspree, EmailJS, etc.).
- 🧑‍💻 **Beginner-Friendly & Well-Documented**: Clean, modular code with helpful comments throughout HTML, CSS, and JavaScript.

---

## 📁 Project File Structure

```text
workshop/
│
├── index.html        # Complete semantic HTML5 structure with Bootstrap 5 CDN
├── style.css         # Custom CSS3 styling, dark mode tokens, animations & layout
├── script.js         # Vanilla JavaScript: Typewriter, project filters, modal & form
└── README.md         # Workshop documentation, setup instructions & customization guide
```

---

## 🚀 How to Run & Preview the Website

You can preview this website locally using any of the following simple methods:

### Method 1: Direct File Opening (No Installation Required)
1. Open your File Explorer and navigate to:
   ```
   c:\Users\HP\Downloads\workshop
   ```
2. Double-click on `index.html` (or right-click -> **Open with** -> **Google Chrome**, **Microsoft Edge**, or **Firefox**).
3. The portfolio will load immediately in your default web browser!

---

### Method 2: Python Local Server (Recommended for Workshop Demos)
Since Python 3 is already installed on your system, you can spin up a local development server in seconds:

1. Open **PowerShell** or **Command Prompt** in the `workshop` folder:
   ```powershell
   cd C:\Users\HP\Downloads\workshop
   ```
2. Run the built-in HTTP server:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and visit:
   ```
   http://localhost:8000
   ```
4. Press `Ctrl + C` in PowerShell to stop the server when done.

---

### Method 3: VS Code / IDE Live Server Extension
1. Open the `workshop` folder in **VS Code** or **Antigravity IDE**.
2. If installed, right-click `index.html` and click **"Open with Live Server"**.
3. Any changes you make in `index.html`, `style.css`, or `script.js` will automatically reload in your browser.

---

## 🛠️ Beginner Customization Guide

This project was built specifically for a beginner workshop. Here is how you can personalize each section:

### 1. Changing Your Name and Role (`index.html`)
- Open `index.html` and search for:
  - `<h1 class="hero-title ...">Hi, I'm <span class="gradient-text">NEHA LATHEESH</span></h1>`
  - Replace `NEHA LATHEESH` with your own name.
- In `script.js`, customize the typewriter roles array:
  ```javascript
  const roles = [
    "DATA ANALYST",
    "PYTHON & SQL SPECIALIST",
    "POWER BI DEVELOPER",
    "FRONTEND DEVELOPER"
  ];
  ```

### 2. Updating Social Media & Contact Links (`index.html`)
- Search for the social link buttons (`hero-github`, `hero-linkedin`, `hero-instagram`):
  ```html
  <a href="https://github.com/your-username" target="_blank" class="social-icon-btn">
    <i class="fa-brands fa-github"></i>
  </a>
  ```
- Update `neha.latheesh@example.com` with your active email address.

### 3. Adding or Modifying Skills (`index.html`)
- Look for `<section id="skills">`.
- To adjust the percentage bar for any skill, update the `style="width: 90%"` and the percentage text:
  ```html
  <span>Python (Pandas, NumPy)</span>
  <span class="text-accent-purple fw-semibold">95%</span>
  ...
  <div class="progress-bar progress-bar-purple" style="width: 95%"></div>
  ```

### 4. Updating Projects (`index.html`)
- In `<section id="projects">`, each `<div class="project-item" data-category="...">` represents a project card.
- Change the `data-category` to `ml`, `bi`, or `web` so the filter buttons categorize it automatically.
- Update the `data-title`, `data-desc`, `data-tech`, and `data-metrics` attributes on the "Case Study" button to populate the popup modal!

### 5. Connecting the Contact Form to Receive Real Emails
The form currently performs full front-end validation and demonstrates a simulated submission. To receive messages in your inbox for free:
1. Go to [Formspree.io](https://formspree.io) or [EmailJS](https://www.emailjs.com).
2. Create a free form and get your endpoint URL (e.g. `https://formspree.io/f/xyz...`).
3. In `index.html`, change:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Or use the EmailJS SDK inside `script.js`.

---

## 🧰 Dependencies & CDNs Used

No `npm install` is required! All dependencies load via ultra-fast, reliable CDNs:
- **Bootstrap 5.3.3**: Layout, responsive grid, modal, and utilities
- **Font Awesome 6.5.1**: Modern icons for social links, tech logos, and tools
- **Google Fonts**:
  - `Outfit` (Headings)
  - `Plus Jakarta Sans` (Body text)

---

## 📄 License
This template is open-source and free to use for personal portfolios, student showcases, and educational workshops. Happy coding!

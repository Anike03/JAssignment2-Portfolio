Aniket Sharma — Developer Portfolio
This is a fully responsive, interactive web developer portfolio built using React.js, featuring 3D animated backgrounds, project showcases, skills, and a contact form that actually sends messages to your email.

🔗 Live Demo
🌐 https://j-assignment2-portfolio.vercel.app/
(API: https://jassignment1-awl0.onrender.com)

📁 Features
🚀 Projects fetched live from your backend (/api/projects)

🛠️ Skills section powered by backend (/api/skills)

💫 Canvas-based animated background using Three.js

💌 Working contact form with Formspree

🎨 Modern glassmorphism UI with smooth hover animations

📱 Fully responsive on all devices

🔧 Tech Stack

Frontend Backend (API) Tools
React.js Express + MongoDB Formspree
Axios Node.js Vercel
CSS Modules Pug (Server) Git/GitHub
Three.js Deployed via Render
🚀 Getting Started (Local Development)

1. Clone the repository
   git clone https://github.com/Anike03/JAssignment2-Portfolio.git

2. Install dependencies
   npm install

3. Setup environment variables
   Create a .env file in the root of /src and add:
   REACT_APP_API_URL=https://jassignment1-awl0.onrender.com

4. Run the app
   npm start

💡 How It Works
📂 Projects & Skills
Your Express backend exposes an API at:

/api/projects – returns a list of project objects (title, description, imageUrl, githubLink)

/api/skills – returns your tech stack with name and proficiency

These are fetched in real-time using Axios in Home.jsx.

💌 Contact Form
The Contact.jsx component uses Formspree to send messages to your email:

Form sends a POST request to: https://formspree.io/f/xnnpkeea

You receive form data directly to your inbox: aniketsharma9426@gmail.com

📷 Screenshots

Home & Projects Skills & Contact
📦 Deployment
Frontend
Deploy via Vercel or Netlify
npm run build
Upload the /build folder to your hosting service.

Backend
Already hosted on Render at:

arduin0
https://jassignment1-awl0.onrender.com
✨ Credits
👨‍💻 Coded by Aniket Sharma

🔗 Backend powered by [Express + MongoDB]

🖌️ Styled with ❤️ and CSS animations

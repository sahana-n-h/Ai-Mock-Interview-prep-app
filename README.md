
# 🎤 INTERVIEW MATE – AI-Powered Interview Preparation Platform

INTERVIEW MATE is an interactive voice-based interview preparation web application that simulates real-time interviews using AI voice agents and provides instant feedback. Built with modern technologies like **Next.js**, **Firebase**, **Tailwind CSS**, and **Vapi AI**, this platform is designed to help job seekers practice interviews in a realistic, intelligent, and user-friendly environment.

---
## 🛠️ Tech Stack

- **Frontend & Backend**: Next.js (App Router)
- **Styling**: Tailwind CSS, shadcn/ui
- **Authentication & DB**: Firebase (Auth + Firestore)
- **AI Voice Interaction**: Vapi AI Voice Agents
- **AI Question/Feedback Generation**: Google Gemini (Generative AI)
- **Validation**: Zod
- **Dev Tools**: Git, VS Code

---

## ✨ Features

- 🔐 **Authentication** – Sign up/sign in using email/password (Firebase Auth).
- 🎙️ **Voice Interviews** – Real-time interview with Vapi AI voice agents.
- 🧠 **AI-Generated Questions** – Custom interview questions based on job role, level, and stack.
- 📈 **Feedback Engine** – AI feedback on communication, technical skills, problem-solving, and more.
- 📄 **Transcripts** – Full transcript of your interview session.
- 📊 **Dashboard** – Manage and review past interviews.
- 📱 **Responsive UI** – Works across desktop and mobile devices.

---

### ✅ Prerequisites

Ensure the following are installed:

- Node.js
- npm
- Git


### 🔐 Environment Variables


```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

### 🧪 Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Folder Structure

```
├── app/                    # Pages and routes (Next.js App Router)
│   └── interview/          # Interview flow: start, feedback, etc.
├── components/             # UI components using shadcn/ui
├── lib/                    # Utility and AI action logic
├── public/                 # Static assets (icons, covers, etc.)
├── styles/                 # TailwindCSS and global styles
├── .env.local              # Environment config
└── README.md               # You're here!
```

---

## 🧠 AI Prompt Samples

### 🔸 Question Generation Prompt
```ts
Prepare questions for a job interview...
The role is ${role}, level is ${level}, tech stack: ${techstack}...
```

### 🔸 Feedback Generation Prompt
```ts
Evaluate the candidate on:
- Communication
- Technical Knowledge
- Problem Solving
- Cultural Fit
- Confidence
```

---


## 📄 License

MIT © 2025

---

## 🙏 Acknowledgments

- JavaScript Mastery for the tutorial base.


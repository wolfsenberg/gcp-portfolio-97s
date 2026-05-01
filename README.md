# 🚀 Complete Beginner's Guide: Personalizing Your AI Portfolio

Welcome! If you've never touched code before or are just starting out, this guide is for you. We will transform this template into **your** professional space.

---

## 🛠 What is in this project?
Think of your portfolio like a house:
*   **`index.html`**: The structure (walls, doors, windows). This is where your text and links live.
*   **`styles.css`**: The paint and furniture. This makes the site look pretty and "glassy."
*   **`context.md`**: The brain of your house. This file tells your AI Chatbot who you are and what you do.
*   **`assets/`**: Your photo album. This is where your profile picture and project images live.

---

## 🏁 Phase 1: Setting Up Your Workshop
To see your changes as you make them, you need to run the site on your computer.

### 1. Install the Engine
You need **Node.js**. If you don't have it, download the "LTS" version from [nodejs.org](https://nodejs.org/).

### 2. Open Your Project
Open your code editor (like VS Code) and open this folder. Open a **Terminal** (usually `Ctrl + ` ` or `Terminal > New Terminal`).

### 3. Install Dependencies
In the terminal, type this and hit Enter:
```bash
npm install
```

### 4. Add Your API Key (The Chatbot's Power)
Go to [Google AI Studio](https://aistudio.google.com/) and get a free API Key. Then, tell your computer to use it:
*   **Windows (PowerShell):** `$env:GEMINI_API_KEY="PASTE_YOUR_KEY_HERE"`
*   **Mac/Linux:** `export GEMINI_API_KEY="PASTE_YOUR_KEY_HERE"`

### 5. Start the Preview
Type this:
```bash
npm run dev
```
Now, go to `http://localhost:8080` in your browser. **Keep this terminal open!** The site will update as you save files.

---

## ✍️ Phase 2: Training Your AI Chatbot (`context.md`)
This is the most important part for your "AI" portfolio. The chatbot answers questions based **ONLY** on this file.

1.  Open `public/context.md`.
2.  **The Profile Section:**
    *   Find `# Profile`. Change "Bryl Lim" to your name.
    *   Describe your current role. Use plain English like: *"I am a graphic designer based in New York."*
3.  **The Knowledge Base:**
    *   Add a `## Experience` section. Use dashes `-` for lists.
    *   *Example:* `- 2023-Present: Junior Developer at TechCorp.`
4.  **The Secret Sauce:**
    *   If you want the AI to be funny, professional, or direct, write a small "Instructions" section at the top of the file.

> [!TIP]
> If someone asks the chatbot "What is your favorite color?", and it's not in this file, the AI will say "I don't know." **If it's important, put it in the Markdown!**

---

## 🏗 Phase 3: Updating the Website (`index.html`)
This file controls what people see when they land on your page.

### 1. Changing Your Name
Search (Ctrl+F) for `<title>`. Change the text inside to `Your Name | Portfolio`.

### 2. Updating Sections
Look for code that looks like this:
```html
<section id="about">
  <h2>About Me</h2>
  <p>I am a software engineer...</p>
</section>
```
Simply change the text between the `<p>` and `</p>` tags. 

### 3. Adding Projects
Find the `id="projects"` section. You will see "Project Cards." To add a new one, copy an existing `<div class="project-card">` block and paste it right below. Then, change the title and link.

---

## 🎨 Phase 4: Changing Colors & Style (`styles.css`)
You don't need to know complex CSS. We use "Variables" at the very top of `public/styles.css`.

1.  Open `public/styles.css`.
2.  Find the `:root` section (Lines 1-15).
3.  Change these values:
    *   `--primary`: The main "accent" color (buttons, borders).
    *   `--background`: The color of the page.
    *   `--glass-bg`: The transparency of the cards.

**Pro Tip:** Use a "Hex Color Picker" on Google to find codes like `#6366f1` (Indigo) or `#ef4444` (Red).

---

## 🖼 Phase 5: Swapping Images
1.  **Your Profile Picture:**
    *   Find a photo of yourself.
    *   Rename it to `profile.webp` (or `profile.jpg`).
    *   Drop it into the `public/assets/` folder, replacing the old one.
2.  **Updating the Code:**
    *   If you used a `.jpg`, go to `index.html` and search for `profile.webp`. Change it to `profile.jpg`.

---

## 🚀 Phase 6: Going Live (Deployment)
When you are ready for the world to see your work, we will put it on the internet using Google Cloud. It looks scary, but it's just following a few steps!

### 1. Prepare Google Cloud
1. Go to [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. Click the **Select a project** dropdown at the top and create a **New Project**. Name it something like "My Portfolio".
3. **Important:** You must enable billing to use Cloud Run. Go to "Billing" in the menu and link a card (Google gives you free credits, and this project costs pennies a month, if anything).

### 2. Open Cloud Shell (Your Web Terminal)
1. In the top right corner of the Google Cloud website, click the `>_` icon. This opens **Cloud Shell**, a mini-computer inside your browser.
2. Wait a minute for it to connect.

### 3. Upload Your Files
If you aren't using GitHub, the easiest way is to upload a ZIP file.
1. On your computer, zip up your entire project folder (right-click the folder -> Compress or Send to > Compressed (zipped) folder).
2. In Cloud Shell, click the **Three Dots (More)** menu -> **Upload**. Select your ZIP file.
3. Once uploaded, type this in the Cloud Shell terminal to unzip it (assuming you named it `portfolio.zip`):
   ```bash
   unzip portfolio.zip
   cd portfolio
   ```

### 4. Run the Magic Deploy Script
We created a script that handles all the complicated server stuff for you.
1. In the Cloud Shell, type:
   ```bash
   chmod +x ./deploy-cloudshell.sh
   ./deploy-cloudshell.sh --project "YOUR-PROJECT-ID"
   ```
   *(Note: Replace `YOUR-PROJECT-ID` with your actual Project ID from the Google Cloud dashboard).*
2. **Follow the Prompts:** It will ask you for your **Gemini API Key**. Paste it in!
3. It will do a bunch of loading. When it finishes, it will give you a **Service URL** (like `https://bryl-xyz.run.app`). Click that link to see your live portfolio!

### 5. How to Update Later
Whenever you make changes to your files and want to update the live site:
1. Zip the new files, upload them to Cloud Shell, and replace the old ones.
2. Run the magic script again: 
   ```bash
   ./deploy-cloudshell.sh --project "YOUR-PROJECT-ID"
   ```

---

## 🆘 Common "Newbie" Gotchas
*   **"I saved the file but nothing changed!"** -> Check if your terminal running `npm run dev` shows any red error text.
*   **"The chatbot says 'Error'!"** -> Make sure your Gemini API key is correct and you've set the environment variable (Step 1.4).
*   **"My images are huge!"** -> Try to use `.webp` format. You can convert them by running `npm run assets:webp` in your terminal.

---

**Need help?** Check the [Troubleshooting](#-troubleshooting) section in the Appendix or ask your favorite AI (like me!) for specific code snippets.

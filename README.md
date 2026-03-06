# PopX — React JS Assignment

> Pixel-perfect implementation of the PopX mobile app UI built for the **Educase India ReactJS Development Internship** assignment.

## 🌐 Live Demo

**[https://educase-reactjs-assignment-ten.vercel.app/](https://educase-reactjs-assignment-ten.vercel.app/)**

## 📁 GitHub Repository

**[https://github.com/Sufalthakre18/educase-reactjs-assignment](https://github.com/Sufalthakre18/educase-reactjs-assignment)**

---

## 📱 Screens Implemented

| Screen | Route | Description |
|---|---|---|
| Welcome | `/` | Landing page with Create Account & Login buttons |
| Login | `/login` | Email + password form, button activates on input |
| Signup | `/signup` | Full registration form with agency radio selection |
| Profile | `/profile` | Account settings with avatar, bio, and dashed divider |

**Navigation flow:**
```
Welcome → Create Account → Signup → Profile
Welcome → Login → Profile → Back → Welcome
```

---

## ✨ Features

- 📐 **Pixel-perfect** match to the Adobe XD design
- 📱 **Mobile interface** (390×844px) centered on desktop webpage
- 🔀 **Seamless navigation** between all 4 pages using React Router
- ✅ **Smart button states** — Login/Signup buttons only activate when required fields are filled
- 🎨 **Floating labels** on all input fields (purple, positioned above border)
- 🟣 **Custom radio buttons** matching the exact design style
- 🟡 **Gold underline** accent on the Signup screen title
- 📸 **Camera badge** overlay on profile avatar
- 〰️ **Dashed divider** on the Profile screen

---

## 🛠 Tech Stack

| Technology | Version | Reason |
|---|---|---|
| **React** | 19 | Component-based UI, required by assignment |
| **Vite** | 7 | Fastest dev server and build tool for React |
| **React Router DOM** | 7 | Client-side navigation between screens |
| **Tailwind CSS** | v4 | Utility-first CSS with `@theme` config in CSS — no config file needed |

---

## 📂 Project Structure

```
popx-app/
├── src/
│   ├── pages/
│   │   ├── Welcome.jsx     # Landing screen
│   │   ├── Login.jsx       # Login form screen
│   │   ├── Signup.jsx      # Registration form screen
│   │   └── Profile.jsx     # Account settings screen
│   ├── App.jsx             # Routes + MobileFrame wrapper
│   ├── main.jsx            # React entry point with BrowserRouter
│   └── index.css           # Tailwind v4 @theme + floating label CSS
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Sufalthakre18/educase-reactjs-assignment.git
cd educase-reactjs-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
```

---

## 🎨 Design Reference

Original Adobe XD Design:
[https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

### Color Palette Used

| Token | Hex | Usage |
|---|---|---|
| `--color-popx` | `#6C25FF` | Primary purple — buttons, labels, accents |
| `--color-popx-light` | `#EDE9FF` | Light purple — Login secondary button |
| `--color-gold` | `#EEB22B` | Gold underline on Signup title |
| `--color-text-dark` | `#1D1D1D` | Headings and body text |
| `--color-text-gray` | `#6C6C6C` | Secondary/muted text |
| `--color-btn-disabled` | `#CBCBCB` | Inactive button state |
| `--color-input-border` | `#CBCBCB` | Input field borders |

---

## 🚀 Deployment

Deployed on **Vercel** via GitHub integration.

To redeploy:
```bash
# Push any changes to main branch
git push origin main
# Vercel auto-deploys on every push
```

Or deploy from scratch:
```bash
npx vercel
```

---

## 💡 Key Implementation Notes

- **MobileFrame wrapper** in `App.jsx` — all screens render inside a fixed `390×844px` container centered on the page, exactly matching the assignment requirement of "mobile app interface centered on webpage"
- **Floating labels** are implemented with pure CSS using `.field-wrapper` — a `position: relative` container with an `absolute` label sitting on top of the input border
- **Button activation logic** — `useState` tracks form fields; buttons use `disabled` prop and conditional `backgroundColor` to switch between purple (active) and gray (inactive)
- **No backend** — this is a pure frontend implementation as the assignment requires only UI/navigation

---

## 👤 Author

**Sufal Thakre**
Built for Educase India ReactJS Development Internship Assignment
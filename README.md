# 📘 User Invite Autocomplete Component

A modular email input with validation, chip display, and Docker support.

---

## ✨ Setup Instructions

1️⃣ **Install dependencies:**

```bash
npm install

✅ This installs everything in your package.json, including React, Vite (or Create React App), and MUI.

If you haven’t yet added MUI, install it separately:

npm install @mui/material @mui/icons-material @emotion/react @emotion/styled


⸻

2️⃣ Start the development server:
	•	For Vite:

npm run dev

The app will be available at:

http://localhost:5173


	•	For Create React App:

npm start

The app will be available at:

http://localhost:3000



⸻

3️⃣ Run in Docker:

docker-compose up --build

✅ This will:
	•	Build the production bundle
	•	Serve it with Nginx
	•	Expose it at:

http://localhost:3000


⸻

💡 Assumptions & Design Decisions
	•	The component uses MUI Autocomplete in freeSolo + multiple mode for flexible input.
	•	Emails are deduplicated automatically.
	•	Validation uses a simple regex:

/^[^\s@]+@[^\s@]+\.[^\s@]+$/


	•	The parent component manages the emails list to control submission and hidden chips.
	•	Chips show tooltips with the full email when truncated.
	•	Hidden chips are displayed in a dropdown when clicking the “+X” chip.

⸻

🛠️ Challenges & Solutions
	•	TypeScript Type Issues:
	•	Autocomplete produced string | never[] types.
	•	✅ Solution: Explicitly cast values to string[].
	•	Render Value Logic:
	•	Relying solely on selected caused desync between state and UI.
	•	✅ Solution: Kept emails passed as a prop to maintain clear state ownership.
	•	Error Handling:
	•	Needed user-friendly feedback for invalid input.
	•	✅ Solution: Displayed error messages cleanly below the component.

⸻

🧩 Project Component Mapping

Below is a quick guide to what each file does:

File	Purpose
UserInviteAutocomplete.tsx	Main parent component. Orchestrates all state, props, and renders the input, button, and popper.
useEmailInvite.ts	A custom hook encapsulating all business logic: input state, validation, popper control, and error handling.
InviteInput.tsx	Renders the MUI <Autocomplete> input with visible chips and the “+X” hidden count chip.
InviteChip.tsx	A single email chip wrapped in a tooltip showing the full email if truncated.
HiddenChipsPopper.tsx	Dropdown that appears when clicking “+X”, showing hidden chips and allowing removal.


⸻

✅ Quick Visual Flow

UserInviteAutocomplete
├── useEmailInvite (state & logic)
├── InviteInput
│     └── InviteChip
└── HiddenChipsPopper
      └── InviteChip


⸻

✅ How to Customize
	•	Change max visible chips:
Adjust the maxVisibleChips prop in UserInviteAutocomplete.tsx.
	•	Update validation logic:
Edit the regex in useEmailInvite.ts.
	•	Styling:
All layout uses MUI <Box> and sx props for easy overrides.


```

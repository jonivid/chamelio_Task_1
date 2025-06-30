


# 📘 User Invite Autocomplete Component

A modular, production-ready email input with validation, tooltips, hidden chip handling, and Docker support.

---

## ✨ Quick Start

### 🔹 Install dependencies

```bash
npm install


⸻

🔹 Start the development server

npm run dev

Runs locally at:

http://localhost:5173


⸻

🔹 Build and run in Docker

docker-compose up --build

This will:
	•	Build the production bundle
	•	Serve it via Nginx
	•	Expose it at:

http://localhost:3000


⸻

🧩 Project Overview

This component lets users input and manage multiple emails, with:
	•	Inline chips for the first few emails
	•	A “+X” chip showing how many are hidden
	•	A popper dropdown for hidden emails
	•	Tooltips showing the full email address
	•	Validation of email syntax
	•	Clean error messages

⸻

🛠 File Structure and Responsibilities

File	Purpose
UserInviteAutocomplete.tsx	Main component orchestrating state, handlers, and layout.
useEmailInvite.ts	Custom hook encapsulating all logic: state, validation, error handling, and popper control.
InviteInput.tsx	Renders the Autocomplete input with visible chips and the “+X” hidden count chip.
InviteChip.tsx	Single chip with tooltip, used in both visible area and popper.
HiddenChipsPopper.tsx	Dropdown showing hidden chips with remove actions.


⸻

✅ Visual Component Flow

UserInviteAutocomplete
├── useEmailInvite
├── InviteInput
│     └── InviteChip
└── HiddenChipsPopper
      └── InviteChip


⸻

💡 Design Decisions
	•	Validation Regex:
A simple pattern to validate emails:

/^[^\s@]+@[^\s@]+\.[^\s@]+$/


	•	Parent-managed state:
The emails array is stored in the parent to keep submission and display logic centralized.
	•	Autocomplete freeSolo mode:
Allows typing any email and confirming with Enter.
	•	Tooltips and truncation:
Long emails are truncated and show a tooltip on hover.
	•	Popper for hidden chips:
Keeps the UI clean when many emails are entered.

⸻

🛠 Challenges and Solutions
	•	TypeScript Types:
Autocomplete produced string | never[] types.
✅ Solution: Explicitly cast values to string[].
	•	Render Value Desync:
Using only selected caused hidden chips to desync from parent state.
✅ Solution: Passed emails as a prop to maintain consistent state.
	•	Error Handling:
Needed clear validation feedback.
✅ Solution: Showed error messages below the component.

⸻

🎨 How to Customize
	•	Max visible chips:
Change maxVisibleChips in UserInviteAutocomplete.tsx.
	•	Validation logic:
Update the regex in useEmailInvite.ts.
	•	Styling:
All layout uses MUI <Box> and sx props—override as needed.
	•	Submission handling:
Replace console.log() in the Add Users button with your API call.

⸻

🧪 Example Usage

Import and use in your app:

import { UserInviteAutocomplete } from "./components/userInviteAutocomplete/UserInviteAutocomplete";

export default function App() {
  return <UserInviteAutocomplete />;
}


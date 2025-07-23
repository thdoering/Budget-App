
# Budget App

A privacy-first personal finance desktop app that tracks Net Worth, Usable Net Worth, spending trends, and subscriptions — powered by Plaid and built using Electron.

---

## Purpose

This is a personal-use app designed to eliminate my need for Excel budgeting, automate transaction sync using Plaid, and provide monthly clarity on my financial growth and expenses.

For full background, see [`/docs/BudgetApp_Detailed_PRD.md`](./docs/BudgetApp_Detailed_PRD.md).

---

## Key Features (MVP)

- Syncs financial accounts using Plaid
- Tracks net worth and "usable net worth" over time
- Shows monthly spending breakdown by category
- Detects recurring subscriptions
- Learns from custom categorization overrides
- Stores all data locally and encrypted

---

## Tech Stack

- Electron (desktop shell)
- Node.js + Express (local backend)
- SQLite (local data)
- Plaid API (financial data sync)
- Chart.js or Recharts (data visualization)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/budget-app.git
cd budget-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env` file in the root (see `.env.example` for structure):

```
PLAID_CLIENT_ID=your_client_id
PLAID_SECRET=your_secret
PLAID_ENV=sandbox
```

Note: Do not commit `.env`. It's ignored via `.gitignore`.

### 4. Start the app

```bash
npm run start
```

---

## Security Notes

- All data is stored locally in an encrypted SQLite database.
- No user data is sent to the cloud.
- The local Node.js server runs on localhost only and is not exposed to the internet.
- Future upgrades may include a master password and full SQLCipher integration.

See [`/docs/BudgetApp_Detailed_PRD.md`](./docs/BudgetApp_Detailed_PRD.md#10-security-considerations) for full security goals.

---

## Project Structure

```
budget-app/
│
├── src/
│   ├── main/              # Electron entry point
│   ├── renderer/          # Frontend UI
│   ├── backend/           # Plaid + API handling
│   ├── db/                # SQLite + schema
│   └── utils/             # Encryption + helpers
│
├── assets/                # Static files
├── docs/                  # PRD, diagrams, planning
├── .env                   # (gitignored)
├── .gitignore
├── package.json
├── README.md
└── main.js
```

---

## Future Plans

- Add forecasting features  
- Enable encrypted backups  
- Consider optional mobile access  
- Refactor for open-source sharing

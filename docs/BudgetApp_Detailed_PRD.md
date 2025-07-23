
# 💰 Budget App – Product Requirements Document (PRD)

---

## 1. Overview / Purpose
A personal-use budget app designed to automate financial tracking, visualize net worth (including a custom “usable net worth” metric), and reduce reliance on Excel or paid tools like Monarch. It will function as a desktop application for monthly check-ins and long-term financial insights.

---

## 2. Background & Context
Tyler currently uses Excel to track his budget manually once a month. While this works, it’s time-consuming and lacks automation or data visualization. Existing tools like Monarch offer automation and dashboards but come at a recurring cost. This project aims to create a private, no-cost alternative with a strong focus on automation, simplicity, and growth tracking. It's currently a personal tool, but could expand into a more widely used product later on.

---

## 3. Goals & Objectives
The primary goals of the budget app are to:
- Track and surface high-spending months or categories (e.g., high air travel in July).
- Reduce time and friction required to maintain and review a personal budget (vs. Excel).
- Visualize Net Worth and “Usable Net Worth” over time through an intuitive dashboard.

### Definition – Usable Net Worth:
A modified version of net worth that includes only liquid or accessible assets (e.g., cash, marketable securities) and excludes illiquid assets (e.g., real estate, collectibles, restricted retirement accounts). This metric offers a more practical view of financial flexibility, especially useful for retirement or early retirement planning.

### Stretch Goals:
- Add basic forecasting capabilities using historical spending/income patterns.
- Replace all current Excel workflows with automated or simplified app features.

---

## 4. Scope

### ✅ In Scope (MVP)
- Automated financial data aggregation using Plaid’s free developer tier:
  - Investment account snapshots (e.g. Fidelity)
  - Bank and credit card transactions
- Net Worth and Usable Net Worth tracking
- Dashboard UI showing:
  - Monthly spending by category
  - Net Worth and Usable Net Worth over time
  - Historical spending trends
  - Average annual income and expenses
- Subscription detection
- Manual override and learning system for transaction categorization

### 🚫 Out of Scope (for now)
- Forecasting tools
- Multi-user access
- Manual data entry workflows

### 📌 Integration Note:
- Financial account connectivity will be powered by Plaid using their free developer tier.
- All data will be stored and handled locally or in secure test environments, as the tool is intended for personal use only in early development stages.

---

## 5. User Stories / Use Cases
1. As a user, I want to automatically sync my bank and investment data so I don’t have to manually input transactions or balances.
2. As a user, I want to view my Net Worth and Usable Net Worth in one place to assess my financial flexibility.
3. As a user, I want to see my monthly spending by category so I can identify overspending.
4. As a user, I want to track my Net Worth growth over time so I can see if I’m progressing financially.
5. As a user, I want to view my average income and expenses per year so I can better understand long-term trends.
6. As a user, I want to view all my active subscriptions in one place so I can identify recurring charges I no longer use.
7. As a user, I want to manually re-categorize transactions and have the app learn from these adjustments so future categorizations are more accurate.

---

## 6. Functional Requirements
1. **Plaid Integration**
   - Connect to financial institutions via Plaid API using free developer tier.
   - Authenticate and link at least one bank and one investment account.

2. **Transaction & Balance Syncing**
   - Fetch and store transaction history from linked accounts.
   - Fetch and store investment account balances and cash positions.

3. **Net Worth Calculation**
   - Calculate total assets and liabilities.
   - Display Net Worth = Total Assets - Total Liabilities.

4. **Usable Net Worth Calculation**
   - Allow user to tag or exclude certain assets.
   - Display Usable Net Worth = Liquid Assets - Liabilities.

5. **Spending Breakdown**
   - Categorize transactions using Plaid metadata.
   - Display monthly totals per category and highlight top 3 spending areas.

6. **Income & Expense Trends**
   - Display average monthly and annual income and expenses.
   - Include charts or trendlines to visualize over time.

7. **Dashboard**
   - Summarize:
     - Current Net Worth and Usable Net Worth
     - Total spending this month
     - Top 3 spending categories
     - Historical Net Worth chart
     - Avg. annual income vs. expense

8. **Subscription Detection**
   - Identify recurring transactions.
   - Display merchant, amount, frequency, and next expected charge.
   - Flag subscriptions that have increased in price.

9. **Custom Categorization**
   - Allow manual reassignment of categories.
   - Store and learn override rules based on merchant or pattern.
   - Apply custom rules automatically to future transactions.

---

## 7. Non-Functional Requirements
- Dashboard must load in under 1 second for 90% of users.
- Plaid sync operations should complete in under 5 seconds (given typical latency).
- All sensitive data encrypted at rest using AES-256 or equivalent.
- OAuth tokens stored securely and never in plaintext.
- Application shall run fully offline post-sync.
- App will not support mobile or concurrent users in MVP.

---

## 8. Platform & Architecture
The app will be a **desktop application** using **Electron + Node.js**, featuring:
- Local-first data storage (SQLite or SQLCipher)
- Secure local backend for Plaid API
- Frontend built with HTML/CSS/JS or React
- All API communication limited to localhost

---

## 9. Dependencies
- Plaid API
- Electron
- Node.js + Express
- SQLite (or SQLCipher for encrypted local DB)
- Charting library (e.g. Chart.js or Recharts)
- Crypto utilities (`crypto`, `argon2`, etc.)

---

## 10. Security Considerations (Advanced – For Future Implementation)
- Encrypt local SQLite database with SQLCipher.
- Require user-defined master password; derive key with Argon2.
- Do not store Plaid `access_token` in plaintext.
- Restrict local Node.js backend to `localhost` only.
- Validate and sanitize all input.
- Provide encrypted export/backup options.
- Regular `npm audit` for dependency health.

---

## 11. Assumptions
- User will interact monthly, not daily.
- Only one user will access the app.
- Plaid’s free tier and metadata are sufficient for MVP.
- User machine supports basic cryptographic libraries.
- Full-disk encryption is assumed but not enforced.

---

## 12. Success Metrics / KPIs
- Excel usage reduced to zero post-MVP.
- >90% transactions categorized automatically.
- App launch to financial clarity in under 2 minutes.
- Subscriptions identified and at least one canceled.
- Increased user confidence in financial oversight.

---

## 13. Timeline / Milestones
- Week 1: Repo setup, Plaid sandbox integration
- Week 2: DB schema, transaction sync logic
- Week 3: UI layout and dashboard metrics
- Week 4: Subscription detection + category override
- Week 5: Security additions, export/backup, testing

---

## 14. Open Questions / Risks
- How accurate is Plaid's default categorization?
- Will SQLCipher introduce performance bottlenecks?
- What's the best structure for rule-learning on categorization?
- Should future backups include an encrypted metadata key vault?

---

## 15. 📁 Repository Layout

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
├── .env                   # Plaid keys (gitignored)
├── .gitignore
├── package.json
├── README.md
└── main.js
```

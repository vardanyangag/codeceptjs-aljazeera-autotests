# Al Jazeera UI Automation Tests

This project contains automated UI tests for the Al Jazeera website using CodeceptJS + WebDriver + TypeScript with BDD (Gherkin).

---

## ✅ Features Tested

### A. Al Jazeera Homepage (https://www.aljazeera.com/)
- ✅ Scenario 1 (Desktop): Ensure "Most Popular" section is visible.
- ✅ Scenario 2 (Desktop): Validate it contains exactly 10 posts.
- ✅ Scenario 3 (Mobile): Ensure the section is not visible on mobile view.
- ✅ Scenario 4 (Desktop - Accessibility): 
  - Clicking whitespace → press Tab → press Enter on “Skip to Most Read”
  - Ensure `/#most-read-container` is appended to URL.

### B. Al Jazeera Live Page (https://www.aljazeera.com/live)
- ✅ Scenario 1: Validate Livestream Player is visible.
- ✅ Scenario 2: Validate “Switch Player” button is visible.

---

## 🧰 Tech Stack

- [x] CodeceptJS + WebDriver
- [x] BDD with Gherkin `.feature` files
- [x] Page Object Model
- [x] TypeScript + ts-node
- [x] Allure Reporting

---

## 🚀 Getting Started

### 📦 1. Install Dependencies
```bash
npm install
```

### 🧪 2. Run Tests (BDD)
```bash
npx ts-node --esm ./node_modules/.bin/codeceptjs run --features
```

Or if you're using `npm run`:
```bash
npm run bdd
```

To run in **headless mode**:
```bash
HEADLESS=true npm run bdd
```

---

## 📊 Generate Allure Report

After test execution:
```bash
npm run allure:report
```

This will open a rich HTML report in your browser.

---

## 🗂️ Project Structure

```
.
├── features/                # Gherkin feature files
├── pages/                  # Page Object Models
├── step_definitions/       # BDD Step definitions
├── types/                  # Custom TypeScript declarations
├── output/                 # Test artifacts + screenshots
├── codecept.conf.ts        # Main config
├── tsconfig.json
├── README.md
└── package.json
```

---

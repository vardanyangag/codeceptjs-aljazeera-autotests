# Al Jazeera UI Automation Tests

Automated UI tests for the Al Jazeera website using CodeceptJS, WebDriver, and BDD (Gherkin). This project follows best practices for maintainability, scalability, and reporting.

---

## ✅ Features Tested

- **Homepage (Desktop & Mobile):**
  - Most Popular section visibility and count
  - Responsive/mobile behavior
  - Accessibility: Bypass block/skip links
- **Live Page (Desktop):**
  - Livestream player visibility
  - Switch Player button

---

## 🗂️ Project Structure

See [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) for a full breakdown.

```
├── features/                # Gherkin feature files (desktop/mobile)
├── pages/                  # Page Object Models
├── step_definitions/       # BDD Step definitions (desktop/mobile)
├── types/                  # TypeScript declarations
├── output/                 # Test artifacts + screenshots
├── scripts/                # Helper scripts (e.g., run-tests.sh)
├── codecept.conf.ts        # Main config
├── README.md               # This file
└── ...
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run All Tests (BDD)
```bash
npx ts-node --esm ./node_modules/.bin/codeceptjs run --features
```

Or use the helper script:
```bash
./scripts/run-tests.sh           # All tests
./scripts/run-tests.sh @desktop  # Only desktop tests
./scripts/run-tests.sh @mobile   # Only mobile tests
./scripts/run-tests.sh @smoke    # Only smoke tests
```

### 3. Run in Headless Mode
```bash
HEADLESS=true npm run bdd
```

---

## 📊 Allure Reporting

After running tests, generate and view the Allure report:
```bash
npm run allure:report
```
Or:
```bash
npx allure generate output --clean && npx allure open
```

- Allure results are saved in the `output/` directory.
- See rich HTML reports with test history, screenshots, and steps.

---

## 🏷️ BDD Tagging & Filtering

- Tag scenarios and features for flexible test selection (see [`BDD_TAGGING_STRATEGY.md`](./BDD_TAGGING_STRATEGY.md)).
- Example tags: `@desktop`, `@mobile`, `@smoke`, `@regression`, `@ui`, `@main-page`, `@live-page`, `@critical`, etc.

**Run only smoke tests:**
```bash
./scripts/run-tests.sh @smoke
```

**Run only desktop regression tests:**
```bash
./scripts/run-tests.sh "@desktop.*@regression"
```

---

## 📚 Documentation

- [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md): Directory and naming conventions
- [`BDD_TAGGING_STRATEGY.md`](./BDD_TAGGING_STRATEGY.md): Tagging and filtering
- [`REFACTORING_SUMMARY.md`](./REFACTORING_SUMMARY.md): Refactoring and best practices

---

## 🧰 Tech Stack
- CodeceptJS + WebDriver
- BDD (Gherkin)
- Page Object Model
- TypeScript
- Allure Reporting

---
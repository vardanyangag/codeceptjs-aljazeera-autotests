/// <reference path="./types/codeceptjs-configure.d.ts" />

import { setHeadlessWhen } from '@codeceptjs/configure';

// Enable headless mode when HEADLESS=true is passed in env
setHeadlessWhen(process.env.HEADLESS === 'true');

export const config: CodeceptJS.MainConfig = {
  tests: './step_definitions/**/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com',
      browser: 'chrome',
      windowSize: '1920x1080',
      smartWait: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-gpu', '--no-sandbox']
        }
      }
    }
  },
  include: {
    AljazeeraMainPage: './pages/aljazeera-main.page.js',
    AljazeeraLivePage: './pages/aljazeera-live.page.js'
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './step_definitions/desktop/aljazeera-main.steps.js',
      './step_definitions/desktop/aljazeera-live.steps.js',
      './step_definitions/mobile/aljazeera-main.steps.js'
    ]
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  },
  name: 'codeceptjs-aljazeera-tests'
};

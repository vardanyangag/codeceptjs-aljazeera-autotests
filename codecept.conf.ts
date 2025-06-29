/// <reference path="./types/codeceptjs-configure.d.ts" />

import { setHeadlessWhen } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS === 'true');

export const config: CodeceptJS.MainConfig = {
  tests: './step_definitions/**/*.ts',
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
    AljazeeraMainPage: './pages/AljazeeraMainPage',
    AljazeeraLivePage: './pages/AljazeeraLivePage'
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/aljazeeraMain.steps.ts',
      './step_definitions/aljazeeraLive.steps.ts'
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

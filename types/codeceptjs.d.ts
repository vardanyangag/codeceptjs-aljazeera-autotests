/// <reference types="codeceptjs" />

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    AljazeeraMainPage: typeof import('../pages/AljazeeraMainPage');
    AljazeeraLivePage: typeof import('../pages/AljazeeraLivePage');
  }

  interface Methods extends WebDriver {}

  interface I extends WithTranslation<Methods> {}

  namespace Translation {
    interface Actions {}
  }
}

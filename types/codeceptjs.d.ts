/// <reference types="codeceptjs" />

type CustomSteps = typeof import('../pages/AljazeeraMainPage');
type CustomLiveSteps = typeof import('../pages/AljazeeraLivePage');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    AljazeeraMainPage: CustomSteps;
    AljazeeraLivePage: CustomLiveSteps;
  }
}

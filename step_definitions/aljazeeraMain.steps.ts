import { actor } from 'codeceptjs';

export = function () {
  const I = actor();
  const { AljazeeraMainPage } = inject();

  Given('I am on the Al Jazeera homepage as desktop', async () => {
    I.resizeWindow(1920, 1080);
    await AljazeeraMainPage.goTo();
  });

  Given('I am on the Al Jazeera homepage as mobile', async () => {
    I.resizeWindow(375, 812);
    await AljazeeraMainPage.goTo();
  });

  Then('I should see the Most Popular section', async () => {
    await AljazeeraMainPage.seeMostPopular();
  });

  Then('I should not see the Most Popular section', async () => {
    await AljazeeraMainPage.dontSeeMostPopular();
  });

  Then('I should see 10 articles in the Most Popular section', async () => {
    await AljazeeraMainPage.seeTenPosts();
  });

  When('I use keyboard to access Bypass Blocks', async () => {
    await AljazeeraMainPage.activateBypassBlocks();
  });

  Then('I should be navigated to the Most Read section', async () => {
    await AljazeeraMainPage.verifyURLAppended();
  });
};

const { I } = inject();
const AljazeeraMainPage = require('../../pages/aljazeera-main.page.js');

Given('I am on the Al Jazeera homepage as desktop', async () => {
  await AljazeeraMainPage.navigateAsDesktop();
});

Then('I should see the Most Popular section', async () => {
  await AljazeeraMainPage.seeMostPopular();
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

Then('I activate the Bypass block menu', async () => {
  await AljazeeraMainPage.activateBypassBlocks();
});

Then('The URL should contain the Most Read anchor', async () => {
  await AljazeeraMainPage.verifyURLAppended();
}); 
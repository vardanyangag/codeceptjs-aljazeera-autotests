const { I } = inject();
const AljazeeraLivePage = require('../../pages/aljazeera-live.page.js');

Given('I am on the Al Jazeera live page', async () => {
  await AljazeeraLivePage.goTo();
});

Then('I should see the livestream player', async () => {
  await AljazeeraLivePage.seePlayer();
});

Then('I should see the Switch Player button', async () => {
  await AljazeeraLivePage.seeSwitchPlayerButton();
}); 
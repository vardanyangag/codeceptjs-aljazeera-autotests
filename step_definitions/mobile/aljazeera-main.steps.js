const { I } = inject();
const AljazeeraMainPage = require('../../pages/aljazeera-main.page.js');

Given('I am on the Al Jazeera homepage as mobile', async () => {
  await AljazeeraMainPage.navigateAsMobile();
});

Then('I should not see the Most Popular section', async () => {
  await AljazeeraMainPage.dontSeeMostPopular();
}); 
import { actor } from 'codeceptjs';

export = function () {
  const I = actor();
  const { AljazeeraLivePage } = inject();

  Given('I am on the Al Jazeera live page', async () => {
    await AljazeeraLivePage.goTo();
  });

  Then('I should see the livestream player', async () => {
    await AljazeeraLivePage.seePlayer();
  });

  Then('I should see the Switch Player button', async () => {
    await AljazeeraLivePage.seeSwitchPlayerButton();
  });
};

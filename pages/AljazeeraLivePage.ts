import { actor } from 'codeceptjs';

const I = actor();

export = {
  url: 'https://www.aljazeera.com/live',

  livestreamPlayer: locate('div.livestream__player'),
  switchPlayerButton: locate('button').withText('Switch Player'),

  goTo() {
    I.amOnPage(this.url);
  },

  seePlayer() {
    I.seeElement(this.livestreamPlayer);
  },

  seeSwitchPlayerButton() {
    I.seeElement(this.switchPlayerButton);
  }
};

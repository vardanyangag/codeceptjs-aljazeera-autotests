import { actor } from 'codeceptjs';

const I = actor();

export = {
  url: 'https://www.aljazeera.com',

  sections: {
    mostPopular: locate('#most-read-container'),
    articles: locate('#most-read-container article'),
  },

  goTo() {
    I.amOnPage(this.url);
  },

  seeMostPopular() {
    I.seeElement(this.sections.mostPopular);
  },

  dontSeeMostPopular() {
    I.dontSeeElement(this.sections.mostPopular);
  },

  seeTenPosts() {
    I.seeNumberOfElements(this.sections.articles, 10);
  },

  activateBypassBlocks() {
    I.click(locate('body').at(1)); // click white space
    I.pressKey('Tab'); // reveal bypass menu
    I.pressKey('Enter'); // enter the “Skip to Most Read” menu item
  },

  verifyURLAppended() {
    I.waitInUrl('#most-read-container', 5);
  }
};

const { actor } = require('codeceptjs');
const { CONFIG } = require('./config');
const BasePage = require('./base.page');

const I = actor();

class AljazeeraLivePage extends BasePage {
  constructor() {
    super(CONFIG.LIVE_URL);
    this.elements = {
      livestreamPlayer: locate(CONFIG.SELECTORS.livestreamPlayer),
      switchPlayerButton: locate(CONFIG.SELECTORS.switchPlayerButton).withText('Switch Player'),
      pageContainer: locate(CONFIG.SELECTORS.body)
    };
  }

  /**
   * Verify that the livestream player is visible
   */
  async seePlayer() {
    await this.seeElement(this.elements.livestreamPlayer);
  }

  /**
   * Verify that the Switch Player button is visible
   */
  async seeSwitchPlayerButton() {
    await this.seeElement(this.elements.switchPlayerButton);
  }
}

module.exports = new AljazeeraLivePage(); 
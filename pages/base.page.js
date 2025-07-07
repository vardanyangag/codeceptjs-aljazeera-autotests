const { actor } = require('codeceptjs');
const { CONFIG } = require('./config');

const I = actor();

/**
 * Base Page Object class with common functionality
 */
class BasePage {
  constructor(url) {
    this.url = url;
    this.timeouts = CONFIG.TIMEOUTS;
  }

  /**
   * Navigate to the page
   */
  async goTo() {
    await I.amOnPage(this.url);
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad() {
    await I.waitForElement(CONFIG.SELECTORS.body, this.timeouts.pageLoad);
  }

  /**
   * Get the current page URL
   */
  async getCurrentUrl() {
    return await I.grabCurrentUrl();
  }

  /**
   * Check if the page is loaded
   */
  async isPageLoaded() {
    try {
      await I.seeElement(locate(CONFIG.SELECTORS.body));
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Wait for an element to be visible
   */
  async waitForElement(selector, timeout = this.timeouts.elementWait) {
    await I.waitForElement(selector, timeout);
  }

  /**
   * Check if an element is visible
   */
  async seeElement(selector) {
    await I.seeElement(selector);
  }

  /**
   * Check if an element is not visible
   */
  async dontSeeElement(selector) {
    await I.dontSeeElement(selector);
  }

  /**
   * Click on an element
   */
  async click(selector) {
    await I.click(selector);
  }

  /**
   * Press a key
   */
  async pressKey(key) {
    await I.pressKey(key);
  }
}

module.exports = BasePage; 
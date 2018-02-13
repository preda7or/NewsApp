import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader2Text() {
    return element(by.css('app-root h2')).getText();
  }
}

import { browser, by, element, until } from 'protractor';

export class ArticlesPage {
  navigateTo() {
    return browser.get('/articles/');
  }

  getArticleTitle() {
    const elm = element(by.css('app-article-detail .card-title'));
    browser.wait(
      until.elementIsVisible(elm),
      5000,
      'Error: Element did not display within 5 seconds'
    );
    return elm.getText();
  }

  getArticlesListCount() {
    return element
      .all(by.css('app-article-list > list-group'))
      .then(elements => elements.length);
  }

  clickArticlesListItem(index: number) {
    return element
      .all(by.css(`app-article-list > .list-group:nth-child(${index}) a`))
      .click();
  }

  isArticlesListItemActive(index: number) {
    return element
      .all(by.css(`app-article-list > .list-group:nth-child(${index}) a`))
      .getAttribute('class');
  }

  clickArticleUrlButton() {
    return element(by.css(`app-article-input button`)).click();
  }

  isArticleUrlButtonActive() {
    return element(by.css(`app-article-input button.active`)).isPresent();
  }

  getArticlesListItemTitle(index: number) {
    return element(
      by.css(`app-article-list > .list-group:nth-child(${index}) a div`)
    ).getText();
  }

  clearArticleURL() {
    return element(by.css('#articleUrl')).clear();
  }

  typeArticleURL(url: string) {
    return element(by.css('#articleUrl')).sendKeys(url);
  }
}

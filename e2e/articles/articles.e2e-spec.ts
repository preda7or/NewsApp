import { ArticlesPage } from './articles.po';

describe('news-app Articles page', () => {
  let page: ArticlesPage;

  describe('should redirect to first article by default', () => {
    const selectedArticle = 1;

    beforeEach(async () => {
      page = new ArticlesPage();
      await page.navigateTo();
    });

    it('article title should match first list item title', async () => {
      expect(page.getArticleTitle()).toEqual(
        page.getArticlesListItemTitle(selectedArticle)
      );
    });

    it('first list item should be active', async () => {
      expect(page.isArticlesListItemActive(selectedArticle)).toContain('active');
    });

    // it('url should match the url of first item', async () => {});
  });

  describe('typing in an url', () => {
    beforeEach(async () => {
      page = new ArticlesPage();
      await page.navigateTo();
      await page.clearArticleURL();
      await page.typeArticleURL(
        'https://www.theguardian.com/us-news/2018/feb/09/john-kelly-from-the-designated-white-house-grownup-to-trumps-enabler'
      );
      await page.clickArticleUrlButton();
    });

    it('should change article', async () => {
      expect(await page.getArticleTitle()).toEqual(
        'Pressure grows on John Kelly amid reports he offered to resign'
      );
    });

    it('should change menu activation', async () => {
      expect(page.isArticleUrlButtonActive());
    });
  });

  describe('selecting from list', () => {
    const selectedArticle = 2;

    beforeEach(async () => {
      page = new ArticlesPage();
      await page.navigateTo();
      await page.clickArticlesListItem(selectedArticle);
    });

    it('should article title', async () => {
      expect(await page.getArticleTitle()).toEqual(
        await page.getArticlesListItemTitle(selectedArticle)
      );
    });

    it('should changes menu activation', async () => {
      expect(page.isArticlesListItemActive(selectedArticle));
    });
  });
});

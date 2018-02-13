import { HomePage } from './home.po';

describe('news-app Home page', () => {
  let page: HomePage;

  beforeEach(async () => {
    page = new HomePage();
    await page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getHeader2Text()).toEqual('Home sweet home...');
  });
});

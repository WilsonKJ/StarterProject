import { GrantsPage } from './app.po';

describe('grants App', () => {
  let page: GrantsPage;

  beforeEach(() => {
    page = new GrantsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

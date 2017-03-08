import { SassTestPage } from './app.po';

describe('sass-test App', () => {
  let page: SassTestPage;

  beforeEach(() => {
    page = new SassTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

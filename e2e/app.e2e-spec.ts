import { AngularBootstrapPage } from './app.po';

describe('angular-bootstrap App', () => {
  let page: AngularBootstrapPage;

  beforeEach(() => {
    page = new AngularBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

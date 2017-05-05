import { ProgettoPage } from './app.po';

describe('progetto App', () => {
  let page: ProgettoPage;

  beforeEach(() => {
    page = new ProgettoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

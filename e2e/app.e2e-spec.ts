import { SkyhawkTestPage } from './app.po';

describe('skyhawk-test App', () => {
  let page: SkyhawkTestPage;

  beforeEach(() => {
    page = new SkyhawkTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

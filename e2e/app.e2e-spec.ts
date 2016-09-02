import { Teds2Page } from './app.po';

describe('teds2 App', function() {
  let page: Teds2Page;

  beforeEach(() => {
    page = new Teds2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

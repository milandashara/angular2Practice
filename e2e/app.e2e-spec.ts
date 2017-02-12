import { LifequoteuiPage } from './app.po';

describe('lifequoteui App', function() {
  let page: LifequoteuiPage;

  beforeEach(() => {
    page = new LifequoteuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

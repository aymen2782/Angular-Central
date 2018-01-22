import { CentralFormaPage } from './app.po';

describe('central-forma App', () => {
  let page: CentralFormaPage;

  beforeEach(() => {
    page = new CentralFormaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

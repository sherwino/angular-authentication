import { IrontrelloAngularPage } from './app.po';

describe('irontrello-angular App', () => {
  let page: IrontrelloAngularPage;

  beforeEach(() => {
    page = new IrontrelloAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

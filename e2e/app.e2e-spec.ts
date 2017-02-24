import { NdcCopenhagenTestingAngularPage } from './app.po';

describe('ndc-copenhagen-testing-angular App', () => {
  let page: NdcCopenhagenTestingAngularPage;

  beforeEach(() => {
    page = new NdcCopenhagenTestingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

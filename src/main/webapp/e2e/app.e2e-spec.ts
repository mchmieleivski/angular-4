import { MunicipiosFrontendPage } from './app.po';

describe('municipios-frontend App', () => {
  let page: MunicipiosFrontendPage;

  beforeEach(() => {
    page = new MunicipiosFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

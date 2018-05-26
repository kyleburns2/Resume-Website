import { KyleBurnsResumePage } from './app.po';

describe('angular2-material-dashboard-pro App', () => {
  let page: KyleBurnsResumePage;

  beforeEach(() => {
    page = new KyleBurnsResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('app works!');
  });
});

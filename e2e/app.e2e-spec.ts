import { PairsLearningPage } from './app.po';

describe('pairs-learning App', () => {
  let page: PairsLearningPage;

  beforeEach(() => {
    page = new PairsLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

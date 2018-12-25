import { TestWindow } from '@stencil/core/testing';
import { PageTabs } from './page-tabs';

describe('page-tabs', () => {
  it('should build', () => {
    expect(new PageTabs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageTabsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageTabs],
        html: '<page-tabs></page-tabs>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

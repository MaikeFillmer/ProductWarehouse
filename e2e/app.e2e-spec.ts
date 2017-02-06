import { ProductWarehousePage } from './app.po';

describe('product-warehouse App', function() {
  let page: ProductWarehousePage;

  beforeEach(() => {
    page = new ProductWarehousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

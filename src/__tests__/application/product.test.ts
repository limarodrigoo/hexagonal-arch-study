import { Product } from '../../application/product';

describe('Product application', () => {
  test('Product must be enabled if price greater then 0', () => {
    const testProduct = new Product('Coca', 5.00);
    const mockFunc = jest.spyOn(testProduct, 'enable');
    const consoleSpy = jest.spyOn(console, 'log');
    testProduct.enable();
    expect(mockFunc).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Coca enabled!!');
  });
  test('Product must throw an error when enabled with price lower then 0', () => {
    const testProduct = new Product('Coca', 0);
    expect(() => testProduct.enable()).toThrow('The price must be grater than zero to enabled the product');
  });
  test('Product must be disabled if price is 0', () => {
    const testProduct = new Product('Coca', 0);
    const mockFunc = jest.spyOn(testProduct, 'disable');
    const consoleSpy = jest.spyOn(console, 'log');
    testProduct.disable();
    expect(mockFunc).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Coca disabled!!');
  });
  test('Product must throw an error when disabled with price different of 0', () => {
    const testProduct = new Product('Coca', 5.0);
    expect(() => testProduct.disable()).toThrow('The price must be zero in order to disable the product.');
  });
  test('Product must return True if product is valid!', () => {
    const testProduct = new Product('Coca', 1);
    testProduct.enable();
    const productValid = testProduct.isValid();
    expect(productValid).toBeTruthy();
  });
  test('Product must throw an error if product is not valid!', () => {
    const testProduct = new Product('Pepsi', 2.0);
    expect(() => testProduct.isValid()).toThrow('Status must be enabled or disabled');
  });
});

export default class Item {
  constructor(sku, name, sellIn = 0, quality = 0) {
    this.sku = sku;
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

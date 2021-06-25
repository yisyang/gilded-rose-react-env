export default class Shop {
  static formatItemsData(items) {
    return items.map((item) => ({
      sku: item.sku,
      name: item.name,
      quality: item.quality || 0,
      sellIn: item.sellIn || 0,
    }));
  }

  constructor(items = []) {
    this.items = Shop.formatItemsData(items);
  }

  getItems() {
    return this.items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      // Update quality. Note we will process sellIn separately at a later time.
      // Once the sell by date has passed, Quality degrades twice as fast.
      switch (item.sku) {
        case 'BRIE':
          // "Aged Brie" actually increases in Quality the older it gets.
          // TODO: Ask about how quality is affected AFTER the sell by date.
          item.quality += 1;
          break;
        case 'BSPASS':
          // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
          // Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
          // Quality drops to 0 after the concert
          if (item.sellIn <= 1) {
            item.quality = 0;
          } else if (item.sellIn <= 6) {
            item.quality += 3;
          } else if (item.sellIn <= 11) {
            item.quality += 2;
          } else {
            item.quality += 1;
          }
          break;
        case 'GODLY':
          break;
        case 'MAGIC':
          item.quality -= 2;
          if (item.sellIn <= 0) {
            item.quality -= 2;
          }
          break;
        default:
          item.quality -= 1;
          if (item.sellIn <= 0) {
            item.quality -= 1;
          }
      }

      // Set boundaries on quality to between 0 to 50.
      // Note special exception for GODLY.
      if (item.sku !== 'GODLY') {
        item.quality = Math.max(0, Math.min(50, item.quality));
      }

      // Update sellIn.
      switch (item.sku) {
        case 'GODLY':
          break;
        default:
          item.sellIn -= 1;
      }
    }

    return this.getItems();
  }
}

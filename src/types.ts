export type ShopItem = {
  sku: string;
  name: string;
  sellIn: number;
  quality: number;
};

export type MainShopState = {
  items: ShopItem[]
}

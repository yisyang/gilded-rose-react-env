import shopItemsData from '../../data/shopItems';
import ApiShop from '../../api/shop';
import { ShopItem, MainShopState } from '../../types';

// Using mock API and mock data here.
// WARNING: With real API we may want to update code to leverage redux-thunk or redux-saga.
//          See https://redux.js.org/tutorials/fundamentals/part-6-async-logic
const apiShop = new ApiShop(shopItemsData);

// Separate items into itemsForSale and itemsWithDiscount based on:
// If the Quality or SellIn Date reaches zero, remove it from the on-sale section, and show it in the discount section.
// Add a numeric count of the On Sale and Discount Items to the tab headers using components from our chosen component library.
function groupItems(items: ShopItem[]):MainShopState {
  return {
    itemsForSale: items.filter((item) => item.quality > 0 && item.sellIn > 0),
    itemsWithDiscount: items.filter((item) => item.quality === 0 || item.sellIn <= 0),
  };
}

const initialState = groupItems(apiShop.getItems());
console.log('Initial shop state: ', initialState);

type MainShopAction = {
  type: string;
};

export default function mainShopReducer(state = initialState, action:MainShopAction):MainShopState {
  switch (action.type) {
    case 'mainShop/updateItemsQuality': {
      const newState = groupItems(apiShop.updateQuality());
      console.log('Shop state after update:', newState);
      return newState;
    }
    default:
      // Do nothing
  }
  return state;
}

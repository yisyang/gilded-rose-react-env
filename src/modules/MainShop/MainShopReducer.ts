import shopItemsData from '../../data/shopItems';
import ApiShop from '../../api/shop';
import { ShopItem, MainShopState } from '../../types';

// Using mock API and mock data here.
// WARNING: With real API we may want to update code to leverage redux-thunk or redux-saga.
//          See https://redux.js.org/tutorials/fundamentals/part-6-async-logic
const apiShop = new ApiShop(shopItemsData);

// With mock data, we simply assume everything is for sale initially.
const initialState:MainShopState = {
  items: apiShop.getItems(),
};

type MainShopAction = {
  type: string;
};

console.log('Initial shop state: ', initialState);

export default function mainShopReducer(state = initialState, action:MainShopAction):MainShopState {
  switch (action.type) {
    case 'mainShop/updateItemsQuality': {
      const newState = {
        items: apiShop.updateQuality(),
      };
      console.log('Shop state after update:', newState);
      return newState;
    }
    default:
      // Do nothing
  }
  return state;
}

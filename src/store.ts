import { combineReducers, createStore } from 'redux';
import mainShopReducer from './modules/MainShop/MainShopReducer';

const allReducers = combineReducers({
  mainShop: mainShopReducer,
  // secondShop: secondShopReducer,
  // motd: motdReducer,
});

const oneStore = createStore(allReducers);

export default oneStore;

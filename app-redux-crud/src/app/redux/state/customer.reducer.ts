
import { ActionTypes } from '../state/customer.action';
import { Action } from '@ngrx/store';
import * as customerService from '../customer.service';

export const initialState = {
   customers: [],
   loading: false,
   loaded: false,
};

export function customerReducer(state = initialState, action: Action) {
   console.log(action.type);
   switch (action.type) {
      case ActionTypes.LOAD_CUSTOMERS:
         state.customers = [
            {
               name: 'John Doe',
               phone: '910928392098',
               address: '123 Sun Street',
               membership: 'Platinum',
               id: 1
            },
            {
               name: 'Mary Johnson',
               phone: '808937482734',
               address: '893 Main Voulevard',
               membership: 'Pro',
               id: 2
            }
         ];
         return {
            ...state,
            loading: false,
            loaded: true,
         };
      default:
         return state;
   }
}

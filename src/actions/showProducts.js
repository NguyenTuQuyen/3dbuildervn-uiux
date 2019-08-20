import {SHOW_PRODUCTS} from '../constants/ActionTypes'
export function showProducts(product){
    return {type: SHOW_PRODUCTS , product}
}
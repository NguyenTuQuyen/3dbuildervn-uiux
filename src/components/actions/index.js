import {SHOW_PRODUCTS} from '../constants/actionType'
export function showProducts(product){
    return {type: SHOW_PRODUCTS , product}
}
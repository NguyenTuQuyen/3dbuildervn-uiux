import {SHOW_PRODUCTS} from '../constants/productAction'
export function showProducts(product){
    return {type: SHOW_PRODUCTS , product}
}
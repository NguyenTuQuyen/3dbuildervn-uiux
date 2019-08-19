import { SHOW_PRODUCTS } from "../constants/productAction";
import Item1 from '../../images/Item1.png'
import Item2 from '../../images/Item2.png'
import Item3 from '../../images/Item3.png'
import Item4 from '../../images/Item4.png'
import Item5 from '../../images/Item5.png'
import Item6 from '../../images/Item6.png'

const initState = {
    products: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems: [],
    total: 0
}

function productsReducer (state = initState, action){
    if(action.type === SHOW_PRODUCTS){
        return Object.assign({}, state, {
            product: state.product.concat(action.product)
        })
    }
    return state
}
export default productsReducer
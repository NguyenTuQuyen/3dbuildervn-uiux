import React, {Component} from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
    render(){
        let productList = this.props.products.map(item => {
            return (
                
                <div className="product-item card-item col-xs-3 col-sm-4 col-md-3 col-lg-3">
                    <img className="product-image" src={item.img} alt={item.title} />
                    <span className="product-title">{item.title}</span>
                    <span className="product-desc">{item.desc}</span>
                    <span className="product-price">{item.price}</span>
                    <button to="/" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} />Add</button>
                </div>
            )
        })
        return(
            <div className="home-container" >
                <h3>Home</h3>
                <div class="product-list ">
                    {productList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home)
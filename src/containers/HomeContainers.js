import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../Services/Action/action'

const mapStateToprops = (state) =>({
    data: state.cartitems
})

const mapDispatchToprops = (dispatch) => ({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToprops, mapDispatchToprops)(Home)

// export default Home
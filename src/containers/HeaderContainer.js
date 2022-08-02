import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStateToprops = (state) =>({
    data: state.cartitems
})

const mapDispatchToprops = (dispatch) => ({
    
})

export default connect(mapStateToprops, mapDispatchToprops)(Header)

// export default Home
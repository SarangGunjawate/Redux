import React from 'react'

function Home(props) {
  return (
    <div>
                <div className="add-to-cart">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-add-to-cart--icon-design-png-image_4269419.jpg" />
                </div>
        <h1>home component</h1>
        <div className="cart-wrapper">
            
                <div className="img-wrapper item">
                    <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home
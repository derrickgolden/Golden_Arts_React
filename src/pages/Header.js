import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { LandingPage } from './Landing_page' 
import { Gallery } from './Gallery'
import { Biography } from './Biography'
import { Commission } from './Commission'
import { Contact } from './Contact'
import { Cart, getSavedOrders } from './Cart'
import { ClientInformation } from './Client_Infor'
// import { OrderTotalContext } from './Landing_page'

export class Header extends React.Component{
    state = {height: "", orderTotal: getSavedOrders().orders.length,}
    componentDidMount(){
        let titleHeight = document.body.querySelector(".title").offsetHeight
        console.log(titleHeight)
        this.setState({height: titleHeight})
    }
    updateTotalOrders = (no) =>{
        this.setState(state =>({
            ...state, orderTotal: no,
        }))
    }
    
    render(){
        return(
            <>
            {/* <OrderTotalContext.Provider value = {this.state}> */}
                <div className="gallery-container">
                    <NavBarr height={this.state.height}  orderTotal={this.state.orderTotal}/>
                </div>
                <Routes>
                    
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/gallery' >
                        <Route path='gray' element={<Gallery artType="gray"/>} />
                        <Route path='colored' element={<Gallery artType="colored"/>} />
                    </Route>
                    <Route path='/biography' element={<Biography />} />
                    <Route path='/commission' element = 
                        {<Commission updateTotalOrders={this.updateTotalOrders}/>} />
                    <Route path='/cart' element = 
                        {<Cart updateTotalOrders={this.updateTotalOrders} /> } />
                    <Route path='/contact' element = {<Contact /> } />
                    <Route path='/clientInfor' element= {<ClientInformation />} />
                </Routes>
                {/* <!-- social media links --> */}
                <footer className="footer-socials" > { <Footer />}</footer>
            {/* </OrderTotalContext.Provider> */}
            </>
        )
    }
}

const NavBarr = (props) =>{

    const [toggleMenu, setToggleMenu] = React.useState({toggle: "toggle"})
    const onShowMenu = () =>{
        setToggleMenu({toggle: ""})
    }
    const onHideMenu = () =>{
        setToggleMenu({toggle: "toggle"})
    }

    return(
        <header className="home-container">
            <div className="title">
               <i className="fa-solid fa-bars bars s-all" 
                    onClick={onShowMenu}></i>
                <h2>Derrick <span id="gold">Golden</span> Art</h2>
                    <Link onClick={props.handleDisplayCart} to="/cart">
                        <i className="fa-solid fa-cart-shopping s-all lst-cart">
                            <span id="cart-no">{props.orderTotal}</span></i>
                    </Link>
                        </div>
                        <nav style = {{top:`69px`}} className={toggleMenu.toggle}>
                            <i className="fa-solid fa-xmark cancel s-all"
                                onClick={onHideMenu}></i>
                <ul>
                    <li><Link to="/" role="button" reloadDocument
                        onClick={onHideMenu} >HOME</Link></li>        
                        <GallaryToggle onHandleHideMenu={onHideMenu}/>
                    <li><Link to="/biography" role="button"
                        onClick={onHideMenu} >BIOGRAPHY</Link></li>
                    <li><Link to="/commission" role="button"
                        onClick={onHideMenu} >BUY ARTWORK</Link></li>
                    <li><Link to="/contact" role="button" className="contact"
                        onClick={onHideMenu} >CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}

const GallaryToggle = (props) =>{
    const [display, setDisplay] = React.useState({display:"none"})
    const onMouseOver = () =>{
        setDisplay({display:"inline"})
    }
    const onMouseOut = () =>{
        setDisplay({display:"none"})
    }
    return(
        <li className="inner-gallery" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span id='toggle-gallery' style={{cursor: "default"}} > GALLERY 
                    <ul style={display} id="display">
                        <Link id="gray" to="/gallery/gray"
                            onClick={props.onHandleHideMenu}>GRAY</Link>
                        <Link id="col" to="/gallery/colored"
                            onClick={props.onHandleHideMenu}>COLORED</Link>
                    </ul>
            </span >
        </li>
        // <li className="inner-gallery" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        //     <span style={{cursor: "default"}}  to="#" role="button"> GALLERY 
        //             <ul style={display} id="display">
        //                 <Link id="gray" to="/gallery/gray"
        //                     onClick={props.onHandleHideMenu}>GRAY</Link>
        //                 <Link id="col" to="/gallery/colored"
        //                     onClick={props.onHandleHideMenu}>COLORED</Link>
        //             </ul>
        //     </span>
        // </li>
    )
}

const Footer = () =>(
    <>
        <div className="socials ">
            {/* <!-- Facebook --> */}
            <a className="btn text-white" style={{border:"1px solid #3b5998", color: "#3b5998"}}  
            href="https://www.facebook.com/derrick.golden.31?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" 
            role="button"> <i className="fab fa-facebook-f"></i> </a>
            {/* <!-- Twitter --> */}
            <a className="btn text-white" style={{border:"1px solid #55acee", color: "#55acee"}} 
            href="https://twitter.com/derickgoldenart" target="_blank" rel="noopener noreferrer" role="button">
            <i className="fab fa-twitter"></i> </a>  
            {/* <!-- Instagram --> */}
            <a className="btn text-white" style={{border:"1px solid #ac2bac", color: "#ac2bac"}} 
            href="https://www.instagram.com/derrickgoldenart/" target="_blank" rel="noopener noreferrer"
            role="button"> <i className="fab fa-instagram"></i> </a>   
        </div>
        <div className="socials direct-contact">
            {/* <!-- Whatsapp --> */}
            <span className="mobile">+254714475702</span>
            <a className="btn text-white" style={{border:"1px solid #25d366",color: "#25d366"}} 
            href="https://wa.me/message/USXEEPLFS2DBL1" target="_blank" rel="noopener noreferrer"
            role="button"> <i className="fab fa-whatsapp"></i> </a>
        </div>
    </>
)


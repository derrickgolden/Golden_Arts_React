import React from 'react'
import { Link } from 'react-router-dom'
import { Notification } from './Commission';
// import { OrderTotalContext } from '../App';

// export const OrderTotalContext = React.createContext({orderTotal: 0})

export class Cart extends React.Component{
    // static contextType = OrderTotalContext
    state = {orders: getSavedOrders().orders, 
        notification: {content: "", classname: "note", backgrdColor:""}}
    
    componentDidMount(){  
        this.ordersDom();
    }
    componentDidUpdate(){
        this.ordersDom()   
    }
    populateOrders(cartDom){
        this.state.orders.map((info)=>{
            let dom = createDom(info);
            dom.querySelector("#remove").addEventListener("click", (e) =>{
                let tbl = e.currentTarget.parentElement.parentElement.parentElement;
                let allOrders = this.state.orders;
                allOrders = allOrders.filter(order => order.id !== tbl.id)
                localStorage.setItem("newdom",JSON.stringify(allOrders));
                // sessionStorage.setItem("revCart",JSON.stringify(true));
                this.props.updateTotalOrders(allOrders.length)
                this.setState({orders: allOrders, notification: 
                    {content: <p>One item removed!</p>, classname: "", 
                    backgrdColor:"rgb(180, 216, 180)"}})
                setTimeout(()=>{
                    this.setState({orders: allOrders, notification: 
                        {content: "", classname: "note", backgrdColor:""}})
                },3000)
            })
            cartDom.appendChild(dom);
        })  
    }
    ordersDom(){
        let dom;
        if(dom = document.body.querySelector('.inner-cart')){
            dom.innerHTML = null
            this.populateOrders(dom);
        }
    }
    
    render(){
        // let value = this.props;
        console.log( this.state.orders)
        return(
            <>
                {this.state.orders.length? <FilledCart orders={this.state.orders}/>: <EmptyCart />}
                <Notification state={this.state.notification}/>
            </>
        )
    }
}
// Cart.contextType = OrderTotalContext;

const EmptyCart = () =>(
    <div className="emp-cart ">
        <p>Your cart is empty!</p> 
        <i className="fa-solid fa-cart-shopping large-cart"></i>
        <button className="btn-cart"><Link className="btn-cart" 
            to="/commission">Order Art</Link></button>
    </div>
)

const FilledCart = (props) =>{
    const totalCost = props.orders.reduce((a,b)=> a + Number(b.info.price), 0)

    return(
        <div  className="cart-container">
            <div className="cart">
                <h2>Cart</h2>
                <div className="inner-cart">
                    {  }
                </div>
                    
                <form className="checkout" action="">
                    <h3>TOTAL: <span>kSH. <span id="subtotal">{totalCost}</span></span></h3>
                    <Link to="/clientInfor" className="btn-cart shop-Link">CHECKOUT</Link>                    
                    <Link to="/commission" className='btn-cart shop-Link'>CONTINUE SHOP</Link> 
                </form>
            </div>
        </div>
)}


const createDom = ({id,info}) => {
    // create dom function
    function elt(element, attr, ...children){
        let dom = document.createElement(element)
        if(attr){
            for(let keys of Object.keys(attr)){
                dom.setAttribute(keys, attr[keys])
            }
        }
        for(let child of children){
            if(typeof child == "string"){
                dom.appendChild(document.createTextNode(child))
            }else dom.appendChild(child)
        }
        return dom
    }

    let total = 0;
    let {size,type_art,people,price} = info;
    total += price;
    // document.body.querySelector("#subtotal").innerHTML = total;
    return elt("table",{class: "table", id: id},
        elt("tr",null,elt("th",{class: "t-head"},type_art),
        elt("td",{class: "t-head",style:"text-align: right;"},
        elt("i",{class: "fa-solid fa-trash t-head", id:"remove"}))),
        elt("tr",null,elt("td",null,"Size"),elt("td",null,size)),
        elt("tr",null,elt("td",null,"Person(s)"),elt("td",null,people)),
        elt("tr",null,elt("td",null,"Quantity"),elt("td",null,"1")),
        elt("tr",null,elt("th",null,"Subtotal"),elt("th",null,String(price))))
}

export function getSavedOrders(){
    let orders;
    let clientDetails;
    try{
        orders =JSON.parse(localStorage.getItem("newdom"));
    }catch(e){orders = []}
    try{
        clientDetails =JSON.parse(sessionStorage.getItem("clientDetails"))
    }catch(e){clientDetails = {no:"", name:""}}

    if(!orders) orders = [];
    if(!clientDetails) clientDetails = {no:"", name:""}

    return {orders, clientDetails};
}



// delete an order and reload

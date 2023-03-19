import React from 'react'
import daisy from './images/gray/sm_daisy_nose_inc.jpg'
import couple from './images/colored/sm_couple_col_inc.jpg'
import { Link } from 'react-router-dom'
import { getSavedOrders } from './Cart'

export class Commission extends React.Component{
    constructor(props){
        super(props)
        this.state = {num: 'num', blur: '', cost:{type: "", aSize:"", price: 0},
                        notification: {content: "", classname: "note", backgrdColor:""}}

        this.handleOrder = this.handleOrder.bind(this); 
        this.removeFormOrder = this.removeFormOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
    }
    handleOrder (e){
        // handling the size and cost
        const size = {'g-A4':3000, 'g-A3':4500, 'g-A2':7500, 'c-A3':6000, 'c-A2':9000};
        const artType ={c: "COLORED PAINTING",g: "BLACK AND WHITE PAINTING"}

        let id = e.currentTarget.id;
        let type = artType[id.slice(0,1)]
        let aSize = id.slice(2)
        let price = size[id]
        this.setState(state =>({
            ...state, num: '', blur: 'blur', cost:{type, aSize, price}
        }))
    }
    cancelOrder(){
        this.setState(state =>({...state, num: 'num', blur: '', 
            cost:{type: "", aSize:"", price: 0},}))
    }
    removeFormOrder(e){
        e.preventDefault()
        let persons = document.body.querySelector("input").value
        let value = Number(persons);
        if(value && value > 0){
            const {type, aSize, price} = this.state.cost
            let subTotal = price + ((value-1)*500);
            console.log(price)
            this.setState(Object.assign({},this.state,{num: 'num', blur: ''}))
            console.log(this.state)
            
            let orderInfo = getSavedOrders().orders || [];
            const id = new Date().getTime().toString();
            let info ={size: aSize, type_art:type, people: persons, price: subTotal}
            let details = {id, info}
            console.log(orderInfo)
            orderInfo.push(details)
            
            // let dom = this.createDom(details);
            localStorage.setItem("newdom",JSON.stringify(orderInfo));
            this.props.updateTotalOrders(orderInfo.length)
            this.setState(state=>{
                return({
                ...state, notification: {content: <p>Added to Cart</p> , 
                classname: "", backgrdColor:"rgb(180, 216, 180)"}
            })})
            setTimeout(() =>{
                this.setState(state=>{
                    console.log(state)
                    return({
                    ...state, notification: {content: "" , 
                    classname: "note", backgrdColor:""}
                })})
            },3000)
            // notification(`<p>Added to Cart</p>`,"rgb(180, 216, 180)");
        }
    }
    

    render(){
        let className = this.state.blur += " outer-body"
        return(
            <>
            <div className={className} >
                <div className="commission-section">
                    <div className="prices">
                        <p className="inner-content">The total investment when ordering art 
                            depends on size and number of persons.</p>
                        <p className="inner-content">The prices are one person. There is an extra 
                            charge of Ksh.500 for each extra person.
                        </p>
                        <div className="grey">
                            <div className="price">
                                <img src= {daisy} alt="" />
                                <div className="cost">
                                    <p className="p-t in-t"><strong>For black and white drawings(pencil on paper)</strong></p>
                                    {/* <!-- <p className="in-t"><strong>Investment</strong></p> --> */}
                                    <p id="g-A4" onClick={this.handleOrder}><strong>A4 size</strong>(30 by 21cm) is 
                                        <strong> Ksh.3,000/=</strong> <button className="order-btn btn-cart" 
                                         >ORDER A4</button></p>
                                    <p id="g-A3" onClick={this.handleOrder}><strong>A3 size</strong>(42 by 30cm) is 
                                        <strong> Ksh.4,500/=</strong> <button className="order-btn btn-cart"
                                         >ORDER A3</button></p>
                                    <p className="p-t in-t" style={{marginTop: "1.5rem"}}>
                                        <strong>For black and White painting(oil on canvas) </strong> </p>
                                    <p id="g-A2" onClick={this.handleOrder}><strong>A2 size</strong>(60 by 42cm) is 
                                        <strong> Ksh.7,500/=</strong> <button className="order-btn btn-cart"
                                         >ORDER A2</button></p>  
                                </div>
                            </div>
                        </div>
                        <div className="coloured">
                            <div className="price">
                                <img src= { couple } alt="" />
                                <div className="cost">
                                    <p className="p-t in-t"><strong>For coloured paintings(oil on canvas) </strong> </p>
                                    {/* <!-- <p className="in-t"><strong>Investment</strong></p> --> */}
                                    <p id="c-A3" onClick={this.handleOrder}><strong>A3 size</strong>(42 by 30cm) is 
                                        <strong> Ksh.6,000/=</strong> <button className="order-btn btn-cart"
                                         >ORDER A3</button></p>
                                    <p id="c-A2" onClick={this.handleOrder}><strong>A2 size</strong>(60 by 42cm) is 
                                        <strong> Ksh.9,000/=</strong> <button className="order-btn btn-cart"
                                         >ORDER A2</button></p>
                                    <p className="drk">Incase you're unable to order, need a customized size or painting 
                                        other than portraits, contact
                                        <Link to="/contact">Derrick</Link>
                                    </p>
                                </div>
                            </div>
                        </div>  
                        <Notification state={this.state.notification} />
                    </div>
                </div>
            </div>    
            <NumberOfPersons num={this.state.num} onCancelOrder ={this.cancelOrder}
            onHandlePersons={this.removeFormOrder}/>
            </>
        )
    }
}

const NumberOfPersons = (props) =>{
    if(props.num){
        return null;
    }else{
        return(
            <>
            <form className="number" action="" name="num" onSubmit={props.onHandlePersons} >
            <i onClick={props.onCancelOrder} 
                className="fa-solid fa-xmark cancel-pop"></i>
                <p>Number of people you want drawn in a single photo.</p>
                <input type="number" name="num" id="num" autoFocus
                    placeholder="1 person(s)" required />
                <button className="btn-cart" type="submit" >Submit</button>
            </form>
            </>
            )
        }
    }
export const Notification = (props) =>{
    const {content, classname, backgrdColor} = props.state;
    console.log(backgrdColor)
    const classnames = 'notifications' + classname;
    return(
        <div className= {classnames} style={{backgroundColor: backgrdColor}}>
            {content}
        </div>
    )
} 
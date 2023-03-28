
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import { Notification } from "./Commission"
import { getSavedOrders } from "./Cart"
import { OrderTotalContext } from "./Header"
// const socket = io();

export class ClientInformation extends React.Component{
    state = {validNo:"", btnContent: "Submit", loader: "load", 
        disabled: false ,navigate: null, 
        notification: {content: "", classname: "note", backgrdColor:""} }
    handleState= (obj) =>{
        this.setState(state =>({ ...state,
            ...obj,
        }))
    }

    render(){
        return(
            <>
            {
            <div  className="client-infor">
                <CancelButton />
                <h2>Contact Information</h2>
                <p>You will contacted to send photo(s) to be drawn and 50%
                    downpayment. The balance will be cleared on delivery.
                </p>
                <ContactForm state ={this.state} onHandleState={this.handleState} />
                <Notification state ={this.state.notification} onHandleState={this.handleState} />
            </div>
            }
        </>
        )
    }
}

const ContactForm = (props) =>{
    const {validNo, btnContent, loader, disabled, navigate} = props.state
    const updateCart = React.useContext(OrderTotalContext);
    let className = loader +" loader"
    const handleClientInfor=(e)=>{
            e.preventDefault();
            const no = document.body.querySelector('#no').value
            const name = document.body.querySelector('#name').value
            if(no.length < 10){
                props.onHandleState({validNo:"Enter valid phone number",})
            }else{
                props.onHandleState({validNo:"", btnContent: "Submitting", 
                loader: "", disabled: true,})

                sessionStorage.setItem("clientDetails", JSON.stringify({no, name})) 
                
                const orders = getSavedOrders().orders;
                
                axios
                    .post("http://localhost:8080/send_email",{
                    no, name, orders
                }).then((data)=> {
                    console.log(data);
                    localStorage.removeItem("newdom")
                    updateCart(0);
                    clearTimeout(submitDelay);
                    props.onHandleState({btnContent:"Submitted", loader: "load", 
                        disabled: false, navigate: "/gallery/gray",
                        notification: {content: <p>Order Placed. Thank You.</p>, 
                        classname: "", backgrdColor:"rgb(180, 216, 180)"}}) 
                })
                .catch((err)=>{
                    clearTimeout(submitDelay);
                    props.onHandleState({btnContent:"Failed to Submit", loader: "load", 
                        disabled: true, navigate: "/contact",
                    })         
                })
            const submitDelay = setTimeout(()=>{
                props.onHandleState({btnContent:"Time Out", loader: "load", 
                    disabled: true, navigate: "/contact", })
            },10000)
        }
    }

    // navigating after subbit after to contact/gallery
    const navigation = useNavigate()
    useEffect(()=>{
        if(navigate){
        setTimeout(()=>{
            navigation(navigate, {state: {message: 'We apologize, your order has not been fullfilled. Kindly contact us directly to complete your order.',
                                    color: "red"}});
        },3000)
    }
    });

    const [input, setInput] = useState(getSavedOrders().clientDetails)
    const handleInputChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if(name === "name"){
            setInput({...input, name:value})
        }else{
            setInput({...input, no:value})
        }
    }

    return(
        <>
            <form onSubmit={handleClientInfor} target="_blank" name="name" className="client_details">
                <input type="text" name="name" id="name" placeholder="Your Name" value={input.name} 
                    onChange={handleInputChange} />
                <input type="number" name="number" id="no" placeholder="Phone Number" 
                    value={input.no} onChange={handleInputChange} required  />
                <p className="warn">{validNo}</p>
                <div className={className} ></div>
                <button className="btn-cart" type="submit" disabled={disabled}>
                    {btnContent}</button>
            </form>
        </>
    )
}
// cancel button
export const CancelButton = () =>{
    const navigate = useNavigate()
    return(
        <i onClick={()=>navigate(-1)} 
        className="fa-solid fa-xmark cancel-pop"></i>
    )
}

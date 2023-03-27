import React from  'react'
import { useLocation } from 'react-router-dom'
import { CancelButton } from './Client_Infor'

export class Contact extends React.Component{
    state = {copy: "copied"}
    onHandleCopyNo = () =>{
        navigator.clipboard.writeText("+254714475702")
        this.setState({copy: null})
        setTimeout(()=>{
            this.setState({copy:"copied"})},2000)
        }
    render(){
        let screenWidth = window.screen.width
        const classname = "direct copy-no " + this.state.copy;
        return(
            <div className={screenWidth > 640? " contact-pop-img": ""}>
                
            <div className=" contact-pop">
                <CancelButton />
                <Message />
                {/* <!-- phone call --> */}
                <div className="direct direct-contact">
                    <a href="tel:+254714475702">Call
                        <i className="fa-solid fa-mobile-screen" 
                            style={{color: "hsl(205, 77%, 27%)"}}></i></a>
                    </div>
                    {/* <!-- message Whatsapp --> */}
                <div className="direct whatsapp-link">
                    <a href="https://wa.me/message/USXEEPLFS2DBL1" target="_blank"
                        rel="noopener noreferrer">Whatsapp 
                        <i className="fab fa-whatsapp" 
                            style={{color: "hsl(205, 77%, 27%)"}}></i></a>
                </div>
                <div onClick={this.onHandleCopyNo} className={classname}>
                    <span id="copied">Copied to clipboard</span>
                    <p>+254714475702 <i className="fa-regular fa-copy" 
                        style={{color: "hsl(205, 77%, 27%)"}}></i></p> 
                </div>
            </div>
            </div>
        )
    }
}

const Message = () =>{
    const location = useLocation()
    let message;
    if(location.state) message = location.state;
    else message = {message: 'Get directly in touch with Golden Derrick for any inquiry...', color: null}
    return(
        <p style={{color: message.color}}>{ message.message }</p>
    )
}
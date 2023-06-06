// import React from "react";
// import { Link, Route, Routes } from 'react-router-dom'
// import { Header } from "./Header";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// import photo from './images/Artist_photo.jpg'

// export class LandingPage extends React.Component{
//     render(){
//         return( 
//             <Routes>
//                 <Route path="*" element={<LinksMenu />} ></Route>
//                 <Route path="/gallery/gray" element={<Header />} ></Route>
//                 <Route path="/biography" element={<Header />} ></Route>
//                 <Route path="/commission" element={<Header />} ></Route>
//                 <Route path="/contact" element={<Header />} ></Route>
//             </Routes> 
//         )
//     }
// }

// const LinksMenu = () =>{
//     return(
//         <>
//         <div className="front d-flex flex-column align-items-center">
//             <img className="image" src={photo} alt="The Artist" />
        
//             <div className="link-btns d-flex flex-column">
//                 <Link to="/gallery/gray" role="button" reloadDocument>EXPLORE GALLERY</Link>
//                 <Link to="/biography" role="button" reloadDocument>BIOGRAPHY</Link>
//                 <Link to="/commission" role="button" reloadDocument>BUY ARTWORK</Link>
//                 <Link to="/contact"  role="button" reloadDocument>CONTACT</Link>    
//             </div>
                    
//             <div className="socials">
//                         {/* <!-- Whatsapp --> */}
//                         <a className="btn text-white" style={{border:"1px solid #25d366", color: "#25d366"}}
//                         href="https://wa.me/message/USXEEPLFS2DBL1" target="_blank" rel="noopener noreferrer"
//                         role="button"> <i className="fab fa-whatsapp"></i> </a>
//                         {/* <!-- Facebook --> */}
//                         <a className="btn text-white" style={{border:"1px solid #3b5998", color: "#3b5998"}} 
//                         href="https://www.facebook.com/derrick.golden.31?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" 
//                         role="button"> <i className="fab fa-facebook-f"></i> </a>
//                         {/* <!-- Twitter --> */}
//                         <a className="btn text-white" style={{border:"1px solid #55acee", color: "#55acee"}} 
//                         href="https://twitter.com/derickgoldenart" target="_blank" rel="noopener noreferrer" role="button">
//                         <i className="fab fa-twitter"></i> </a>  
//                         {/* <!-- Instagram --> */}
//                         <a className="btn text-white" style={{border:"1px solid #ac2bac", color: "#ac2bac"}} 
//                         href="https://www.instagram.com/derrickgoldenart/" target="_blank" rel="noopener noreferrer"
//                         role="button"> <i className="fab fa-instagram"></i> </a>
//                         {/* <!-- Youtube --> */}
//                         <a className="btn text-white" style={{border:"1px solid #ed302f", color: "#ed302f"}} 
//                         href="https://www.youtube.com/@goldenderrick1129/featured" target="_blank" rel="noopener noreferrer"
//                         role="button"> <i className="fab fa-youtube"></i> </a>       
//             </div>
//         </div>
//         </>
//     )
// }


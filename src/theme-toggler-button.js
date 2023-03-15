import React from "react";
import { ThemeContext } from "./theme-context";

// function ThemeTogglerButton(){
    
//     return(
//         <ThemeContext.Consumer>
//             {({theme, toggleTheme}) =>{
//             console.log(theme)
//             console.log(toggleTheme)
//                 return(
//                     <button onClick={toggleTheme}
//                     style={{backgroundColor: theme.background}}>
//                         Toggle Theme
//                     </button>
//                 )
//             }}
//         </ThemeContext.Consumer>
//     )
// }
class ThemeTogglerButton extends React.Component{
    render(){
        let value = this.props
        console.log(value)
        return(
                        <button onClick={value.toggleTheme}
                        style={{backgroundColor: value.theme.background}}>
                            Toggle Theme
                        </button>
        ) 
    }
}
ThemeTogglerButton.contextType = ThemeContext;
export default ThemeTogglerButton;
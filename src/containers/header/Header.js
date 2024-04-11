import React from "react";


class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a href="/">MacOS VST</a>
                </div>
                <div className="iconMac">
                    <img srcSet="../mac.svg" alt=""/>
                </div>
            </div>
        )
        
    }
};

export default Header;
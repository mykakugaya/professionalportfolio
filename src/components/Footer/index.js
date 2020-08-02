import React from "react";

var style = {
    backgroundColor: "gray",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "1%",
    position: "relative",
    left: "0",
    right:"0",
    bottom: "0",
    width: "100vm",
    color: "white",
    fontSize: "large",
    fontFamily: "Times New Roman"
}

var phantom = {
    display: 'block',
    height: '2%',
    width: '100vm',
}

function Footer({ children }) {
return (
    <div>
        <div style={phantom} />
        <div style={style}>
            { children }
        </div>
    </div>
)
}

export default Footer;
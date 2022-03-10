import React from "react";

const Button = ({ onClick, children, style }) => {
    return <button onClick={onClick ? onClick : null} style={style ? style : null}>{children}</button>
}

export default Button;
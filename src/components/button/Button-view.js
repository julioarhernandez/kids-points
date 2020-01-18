import React from "react";
import useStyles from "./Button-styles";

const Button = ({name, modifier, clickHandler}) => {
    const buttonStyles = useStyles();
    return(
        <button className={`${buttonStyles.root} ${modifier}`} onClick={clickHandler} name={name}>
            <span>{name}</span>
        </button>
    );
}
export default Button;
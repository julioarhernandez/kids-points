import React from "react";
import useStyles from "./Button-styles";

const Button = ({name, modifier, clickHandler,isButtonDisabled}) => {
    const buttonStyles = useStyles();
    return(
        <button className={`${buttonStyles.buttons} ${modifier}`} onClick={clickHandler} name={name} disabled={isButtonDisabled}>
            <span>{name}</span>
        </button>
    );
}
export default Button;
import React from "react";
import Button from "../button/Button-view";
import useStyles from "./redeem-styles";
import {CSSTransition} from "react-transition-group";

const Redeem = ({amount, animateRedeem, clickHandler, isButtonDisabled}) => {
    const redeemStyle = useStyles();
    return(
        <div className="redeemComponent">
            <header className={redeemStyle.header}>
                <h2 className={redeemStyle.h2}>Redeemed<br/>Points</h2>
                <span>{amount}</span>
            </header>
            <div className="redeemCta">
                <CSSTransition
                    in={animateRedeem}
                    timeout={500}
                    classNames="rubberband">
                <Button name={"redeem"} modifier={"-dark-green -small -all-rounded -padding -adornment"} clickHandler={clickHandler} isButtonDisabled={isButtonDisabled}/>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Redeem;
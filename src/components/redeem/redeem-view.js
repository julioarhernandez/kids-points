import React, {useEffect, useRef, useState} from "react";
import Button from "../button/Button-view";
import useStyles from "./redeem-styles";
import {CSSTransition} from "react-transition-group";
import {useSelector} from "react-redux";

const Redeem = ({amount, clickHandler}) => {
    const redeemStyle = useStyles();
    const points = useSelector(state => state.points);
    const [buttonDisabled, setButtonDisable] = useState(true);
    const [animateRedeem, setAnimateRedeem] = useState(false);

    const prevRef = useRef();
    useEffect(() => {
        setButtonDisable(points <= 4);
        // Only play animation when points is over 4 and you were adding points
        // The animation cannot be triggered when you decrease points from 6 to 5
        // Keeping track of previous points
        prevRef.current = points;
        if (prevPoints < points && points === 5){
            setAnimateRedeem(true);
        }
    }, [points]);

    // Keep tracking of current points
    const prevPoints = prevRef.current;

    const stopAnimation = () => {
        setAnimateRedeem(false);
    }
    return (
        <div className="redeemComponent">
            <header className={redeemStyle.header}>
                <h2 className={redeemStyle.h2}>Redeemed<br/>Points</h2>
                <span>{amount}</span>
            </header>
            <div className="redeemCta">
                <CSSTransition
                    in={animateRedeem}
                    timeout={500}
                    classNames="rubberband"
                    onEntered={stopAnimation}>
                    <Button name={"redeem"} modifier={"-dark-green -small -all-rounded -padding -adornment"}
                            clickHandler={clickHandler} isButtonDisabled={buttonDisabled}/>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Redeem;
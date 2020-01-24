import React from "react";
import useStyles from './Display-styles';
import { CSSTransition } from "react-transition-group";
import Redeem from "../redeem/redeem-view";

const DisplayView = ({modifier, text, animate, animateRedeem, stopAnimation, clickHandler, isButtonDisabled}) => {
    const displayStyle = useStyles();
    return (
        <section className={modifier}>
            <header className={displayStyle.displayHeader}>
                <CSSTransition
                    in={animate}
                    timeout={500}
                    classNames="pulse"
                    onEntered={stopAnimation}>
                    <div className={displayStyle.display}>
                        <h1 className={displayStyle.h1}>{text}</h1>
                    </div>
                </CSSTransition>
            </header>
            <div className={displayStyle.displayBody}>
                <Redeem clickHandler={clickHandler} amount={4} isButtonDisabled={isButtonDisabled} animateRedeem={animateRedeem}/>
            </div>

        </section>
    );
}
export default DisplayView;
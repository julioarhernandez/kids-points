import React from "react";
import useStyles from './Display-styles';
import Redeem from "../redeem/redeem-view";

const DisplayView = ({modifier, text, clickHandler, isButtonDisabled}) => {
    const displayStyle = useStyles();
    return (
        <section className={modifier}>
            <header className="displayHeader">
                <div className={displayStyle.display}>
                    <h1 className={displayStyle.h1}>{text}</h1>
                </div>
            </header>
            <div className={displayStyle.displayBody}>
                <Redeem clickHandler={clickHandler} amount={4} isButtonDisabled={isButtonDisabled}/>
            </div>

        </section>
    );
}
export default DisplayView;
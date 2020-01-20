import React from "react";
import useStyles from "./ActionBar-styles";
import Button from "../button/Button-view";

const ActionBar = ({handleClick, isButtonDisabled}) => {
    const actionStyle = useStyles();
    return(
        <section className={actionStyle.actionbar}>
            <div className={actionStyle.actionButtonBlock}>
                <Button name={"-"} modifier={"-red -medium -rounded"} clickHandler={handleClick} isButtonDisabled={isButtonDisabled}/>
                <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={handleClick} isButtonDisabled={isButtonDisabled}/>
            </div>
        </section>
    );
}
export default ActionBar;
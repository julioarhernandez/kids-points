import React from "react";
import useStyles from "./ActionBar-styles";
import Button from "../button/Button-view";

const ActionBar = ({handleClick}) => {
    const actionStyle = useStyles();
    return(
        <section className={actionStyle.root}>
            <Button name={"-"} modifier={"-red -medium -rounded"} clickHandler={handleClick}/>
            <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={handleClick}/>
        </section>
    );
}
export default ActionBar;
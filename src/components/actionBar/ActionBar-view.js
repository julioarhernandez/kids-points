import React, {useContext} from "react";
import useStyles from "./ActionBar-styles";
import AppContext from "../../context/AppContext";
import Button from "../button/Button-view";

const ActionBar = ({isButtonDisabled}) => {
    const actionStyle = useStyles();
    const prop = useContext(AppContext);
    return (
        <section className={actionStyle.actionbar}>
            <div className={actionStyle.actionButtonBlock}>
                <Button name={"-"} modifier={"-red -medium -rounded"} clickHandler={prop.HandleClick} isButtonDisabled={isButtonDisabled}/>
                <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={prop.HandleClick} isButtonDisabled={isButtonDisabled}/>
            </div>
        </section>
    );
}
export default ActionBar;
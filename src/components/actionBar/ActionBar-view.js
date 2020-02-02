import React from "react";
import useStyles from "./ActionBar-styles";
import Button from "../button/Button-view";
import { useDispatch} from "react-redux";
import { addPointActions, decrementPointActions } from "../../redux/points/pointActions";

const ActionBar = ({isButtonDisabled}) => {
    const actionStyle = useStyles();
    const dispatch = useDispatch();
    return(
        <section className={actionStyle.actionbar}>
            <div className={actionStyle.actionButtonBlock}>
                <Button name={"-"} modifier={"-red -medium -rounded"} clickHandler={() => dispatch(decrementPointActions())} isButtonDisabled={isButtonDisabled}/>
                <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={() => dispatch(addPointActions())} isButtonDisabled={isButtonDisabled}/>
            </div>
        </section>
    );
}
export default ActionBar;
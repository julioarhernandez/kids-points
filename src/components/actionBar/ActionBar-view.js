import React from "react";
import useStyles from "./ActionBar-styles";
import Button from "../button/Button-view";
import {useDispatch} from "react-redux";
import {addPointActions, decrementPointActions} from "../../redux/points/pointActions";
import {playBad, playGood} from "../../helpers/playSound";

const ActionBar = ({isButtonDisabled}) => {
    const actionStyle = useStyles();
    const dispatch = useDispatch();
    return (
        <section className={actionStyle.actionbar}>
            <div className={actionStyle.actionButtonBlock}>
                <Button name={"-"} modifier={"-red -medium -rounded"}
                        clickHandler={() => {
                            dispatch(decrementPointActions());
                            playBad();
                        }} isButtonDisabled={isButtonDisabled}/>
                <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={() => {
                    dispatch(addPointActions());
                    playGood();
                }} isButtonDisabled={isButtonDisabled}/>
            </div>
        </section>
    );
}
export default ActionBar;
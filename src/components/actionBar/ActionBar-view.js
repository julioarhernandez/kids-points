import React from "react";
import useStyles from "./ActionBar-styles";
import Button from "../button/Button-view";
import {useSelector, useDispatch} from "react-redux";
import { addPointActions } from "../../redux/points/pointActions";

const ActionBar = ({handleClick, isButtonDisabled}) => {
    const actionStyle = useStyles();
    const points  = useSelector(state => state.points );
    const dispatch = useDispatch();
    return(
        <section className={actionStyle.actionbar}>
            <div className={actionStyle.actionButtonBlock}>
                <Button name={"-"} modifier={"-red -medium -rounded"} clickHandler={handleClick} isButtonDisabled={isButtonDisabled}/>
                <Button name={"+"} modifier={"-green -large -rounded"} clickHandler={() => dispatch(addPointActions())} isButtonDisabled={isButtonDisabled}/>
                <h1 onClick={()=>{dispatch( addPointActions())}}>{points}</h1>
            </div>
        </section>
    );
}
export default ActionBar;
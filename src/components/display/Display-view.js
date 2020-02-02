import React, {useEffect, useState} from "react";
import useStyles from './Display-styles';
import {CSSTransition} from "react-transition-group";
import {useSelector, useDispatch} from "react-redux";
import Redeem from "../redeem/redeem-view";
import {redeemPointActions} from "../../redux/points/pointActions";

const DisplayView = ({modifier}) => {
    const displayStyle = useStyles();
    const dispatch = useDispatch();
    const points = useSelector(state => state.points);
    const [animate, setAnimate] = useState(false);

    useEffect(()=>{
        setAnimate(true);
    },[points]);

    const stopAnimation = () => {
        setAnimate(false);
    }

    return (
        <section className={modifier}>
            <header className={displayStyle.displayHeader}>
                <CSSTransition
                    in={animate}
                    timeout={500}
                    classNames="pulse"
                    onEntered={stopAnimation}>
                    <div className={displayStyle.display}>
                        <h1 className={displayStyle.h1}>{points}</h1>
                    </div>
                </CSSTransition>
            </header>
            <div className={displayStyle.displayBody}>
                <Redeem clickHandler={() => {
                    dispatch(redeemPointActions())
                }} amount={4} />
            </div>

        </section>
    );
}
export default DisplayView;
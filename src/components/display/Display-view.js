import React from "react";
import useStyles from './Display-styles';

const DisplayView = ({modifier, text}) => {
    const displayStyle = useStyles();
    return(
        <section className={modifier}>
            <h1 className={displayStyle.h1}>{text}</h1>
        </section>
    );
}
export default DisplayView;
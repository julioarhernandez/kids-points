import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./Header-styles";

const Header = ({title}) => {
    const headerStyles = useStyles();
    return  (
        <header>
            <h1 className={headerStyles.h1}>{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;
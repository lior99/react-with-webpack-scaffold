import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { headerClassName } = props;
    return (
        <div className={headerClassName}>
            { props.headerText }
        </div>
    );
}

Header.defaultProps = {
    headerClassName: 'main-container',
}

Header.propTypes = {
    headerClassName: PropTypes.string,
    headerText: PropTypes.string.isRequired,
}

export default Header;
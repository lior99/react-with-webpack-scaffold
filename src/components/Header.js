import React from 'react';

const Header = (props) => {
    const headerClassName = props.headerClassName || "main-container";
    return (
        <div className={headerClassName}>
            { props.headerText }
        </div>
    )
}

export default Header;
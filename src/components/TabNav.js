import React from 'react';

const TabNav = props => {
    return (
        <div className="py-3 text-center">
            <h2>{props.icon}</h2>
            <h6 className="mt-3">{props.title}</h6>
        </div>
    );
}

export default TabNav;

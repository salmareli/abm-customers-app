import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({title}) => {
    return ( 
        <div className="app-header">
            <h1>{title}</h1>
        </div>
    );
};

AppHeader.propTypes = {

};

export default AppHeader;
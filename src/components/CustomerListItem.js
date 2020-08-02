import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const CustomerListItem = ({ name, editAction, delAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
    <Link to={`${urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
    <Link to={`${urlPath}${dni}`}>{editAction}</Link>
                </div>
                <div className="field">
    <Link to={`${urlPath}${dni}`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;    
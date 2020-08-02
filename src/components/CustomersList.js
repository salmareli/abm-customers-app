import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';


const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customer-list">
                   {
                       customers.map( c =>
                            <CustomersListItem
                                key={c.dni}
                                name={c.name}
                                editAction={'Editar'}
                                delAction={'Eliminar'}
                                urlPath={urlPath}>
                            </CustomersListItem> 
                       )
                   }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomersList;
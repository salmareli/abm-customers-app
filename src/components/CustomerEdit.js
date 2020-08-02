import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ( { name, dni, age } ) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <div>Nombre: {name} / Dni: {dni} / Edad: {age}</div>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
};

export default CustomerEdit;
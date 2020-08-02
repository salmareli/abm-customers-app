import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerActions from '../components/CustomerActions';


class HomeContainer extends Component {
    handleOnClick = () => {
        console.log("asdasd");
    }
    render() {
        return (
            <div>
                <AppFrame 
                header="Home"
                body={
                    <div>
                        <CustomerActions>
                            <button onClick={this.handleOnClick}>Clientes</button>
                            <Link to="/customers"></Link>
                        </CustomerActions>
                    </div>
                }></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;

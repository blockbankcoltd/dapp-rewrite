import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class WalletContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount(){
        console.log("LANGUAGE CONFIG Wallet -------------------------------------->>>>>>>> ", this.props);
    }

    render() {

        return (
            <div>
                <h1>Wallet Page</h1>
            </div>
        )
    }
}

const styles = {
    
};

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WalletContainer));



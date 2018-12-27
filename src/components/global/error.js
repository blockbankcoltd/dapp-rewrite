import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    constructor(props) {
        super(props);
        this.activeButton = this.activeButton.bind(this);
    }

    async activeButton(route) {
        if(route !== "login"){
            window.location.href = route;
        } else {
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
                window.location.reload();
            } catch (error) {
                alert('Y')
            }
        }

    }

    render() {
        const {msg, route, language, buttonMsg} = this.props;
        return (
            <ErrorComp>
                <div className="cont">
                    <p>{msg}</p>
                    {route !== "" &&
                        <button type="button" onClick={() => buttonMsg==="login" && this.activeButton(route)}>{buttonMsg}</button>
                    }
                </div>
            </ErrorComp>
        )
    }
}

Error.propTypes = {
    msg: PropTypes.string,
    buttonMsg: PropTypes.string,
    route: PropTypes.string,
    language: PropTypes.object
}
Error.defaultProps = {
    msg: "",
    buttonMsg: "back",
    route: "",
    language: {}
}

const ErrorComp = styled.div`
    background: #fff;
    width:100%;
    padding:55px 0;
    margin-top : 55px;
    text-align: center;
    height: 500px;
    display : table;
    
    .cont {
        width : 100%;
        display: table-cell;
        vertical-align: middle;
    }
`

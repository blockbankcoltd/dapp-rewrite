import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {msg, route, language, buttonTitle} = this.props;
        return (
            <ErrorComp>
                <div className="cont">
                    <p>{msg}</p>
                    <Link to={route}>
                        <button type="button">{buttonTitle}</button>
                    </Link>
                </div>
            </ErrorComp>
        )
    }
}

Error.propTypes = {
    msg: PropTypes.string,
    route: PropTypes.string.isRequired,
    language: PropTypes.object
}
Error.defaultProps = {
    msg: "",
    route: "/",
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

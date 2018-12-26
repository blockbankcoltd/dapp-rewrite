import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class Loading extends React.Component {

    constructor(props) {
        super(props)


    }

    render() {
        const {width, height, show} = this.props;
        return (
            <Comp style={{
                display: show ? 'block' : 'none',
                width: width,
                height: height
            }}>
                <i className="icon xi-spinner-2 xi-spin xi-3x"/>
            </Comp>
        )
    }
}

Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    show: PropTypes.bool.isRequired
}
Loading.defaultProps = {
    width: 1000,
    height: 1000,
    show: true
}

const Comp = styled.div`
    background : black;
    z-index: 100000;
    position: absolute;
    left : 50%;
    top : 50%;
    transform : translate(-50%,-50%);
    margin: 0 auto;
    
    .icon {
        margin: 0 auto;
        position: relative;
        color: white;
        left : 50%;
        top : 50%;
        transform : translate(-50%,-50%);
    }
`

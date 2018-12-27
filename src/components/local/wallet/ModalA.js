import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

export default class ModalA extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { openA, children, onClose } = this.props;
        return (
            <Modal open={openA} onClose={onClose} center showCloseIcon={false}>
                {children}
            </Modal>
        )
    }
}

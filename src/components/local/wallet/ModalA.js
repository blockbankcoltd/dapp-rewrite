import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

export default class ModalA extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { open, children, onClose } = this.props;
        return (
            <Modal open={open} onClose={onClose} center showCloseIcon={false}>
                {children}
            </Modal>
        )
    }
}

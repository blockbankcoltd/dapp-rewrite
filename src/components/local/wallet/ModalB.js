import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

export default class ModalB extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { openB, children, onClose } = this.props;
        return (
            <Modal open={openB} onClose={onClose} center showCloseIcon={false}>
                {children}
            </Modal>
        )
    }
}

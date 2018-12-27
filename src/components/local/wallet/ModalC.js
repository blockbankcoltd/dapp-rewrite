import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

export default class ModalC extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { openC, children, onClose } = this.props;
        return (
            <Modal open={openC} onClose={onClose} center showCloseIcon={false}>
                {children}
            </Modal>
        )
    }
}

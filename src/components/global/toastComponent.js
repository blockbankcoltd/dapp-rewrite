import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default class ToastComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        {this.props.message}
        {this.props.toastStatus === 'error'}
      </div>
    )
  }
}
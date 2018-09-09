/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Help free someone from jail</ModalHeader>
          <ModalBody>
          Opt-in to volunteer your spare computing power to mine cryptocurrency while visiting this site, 100% of which will be donated to the Bronx Freedom Fund to post bail for low-income people detained in New York. If you opt-in, no further action will be required.</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Help free low-income detainees!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>No thanks</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
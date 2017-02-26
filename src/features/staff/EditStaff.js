import React, { Component, PropTypes } from 'react';

export default class EditStaff extends Component {
    static defaultProps = {
        staffMember: null
    };
    static propTypes = {
        staffMember: PropTypes.object,
        cancel: PropTypes.func.isRequired,
        confirm: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        // this.onCancel = this.cancel.bind(this);
        this.onCancel = props.cancel;
        this.onConfirm = this.confirm.bind(this);
    }

    // cancel() { this.props.cancel(); }
    confirm() {
        console.debug('Name: ', this.txtName.value);
        const staff = {
            name: this.txtName.value
        };
        this.props.confirm(staff);
    }

    render() {
        return (
          <div className="staff-edit-staff">
            <div><em>Component content: staff/EditStaff</em></div>

            <div className="form-group">
              <label>Name:</label>
              <input ref={(ctrl) => { this.txtName = ctrl; }} defaultValue={(this.props.staffMember || {}).name || ''} placeholder="Enter staff name" />
            </div>

            <div>
              <button className="btn btn-warning" onClick={this.onCancel}>Cancel</button>
              <button className="btn btn-success" onClick={this.onConfirm}>Confirm</button>
            </div>
          </div>
        );
    }
}

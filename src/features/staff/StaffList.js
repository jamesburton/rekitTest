import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class StaffList extends Component {
    static propTypes = {
        staff: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.onShow = this.show.bind(this);
        this.onHide = this.hide.bind(this);
        this.onEdit = this.edit.bind(this);
        this.onDelete = this.delete.bind(this);
    }

    show(staff) {
        this.props.actions.showStaff(staff);
    }
    hide(staff) {
        this.props.actions.hideStaff(staff);
    }
    edit(staff) {
        this.props.actions.editStaff(staff);
    }
    delete(staff) {
        this.props.actions.deleteStaff(staff);
    }

    render() {
        return (
          <div className="staff-staff-list">
            <div><em>Page Content: staff/StaffList</em></div>

            <ul>
              { this.props.staff.map(staffMember => <li key={staffMember.id} style={{ width: '100%' }}>
                <strong style={{ marginRight: 'auto' }}>{ staffMember.name }</strong>
                { staffMember.visible || <span className="disabled">[Hidden]</span> }
                <span className="pull-right" style={{ marginRight: 0 }}>
                  <button className="btn btn-disabled" onClick={() => this.onShow(staffMember)}>Show</button>
                  <button className="btn btn-disabled" onClick={() => this.onHide(staffMember)}>Hide</button>
                  <button className="btn btn-disabled" onClick={() => this.onEdit(staffMember)}>Edit</button>
                  <button className="btn btn-disabled" onClick={() => this.onDelete(staffMember)}>Delete</button>
                </span>
              </li>
              )}
            </ul>

            <div>
              [Put reload, summary, etc. here?]
            </div>
          </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        staff: state.staff,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffList);

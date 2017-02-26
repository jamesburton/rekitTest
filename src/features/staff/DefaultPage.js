import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import EditStaff from './EditStaff';
import { StaffList } from './StaffList';

export class DefaultPage extends Component {
    static propTypes = {
        staff: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            showingEdit: false,
            editingStaff: null
        };
        this.newStaff = () => {
            this.setState({ showingEdit: true, editingStaff: null });
        };
        this.cancelEdit = () => {
            this.setState({ showingEdit: false, editingStaff: null });
        };
        this.editStaff = (staff) => {
            this.setState({ showingEdit: true, editingStaff: staff });
        };
        this.confirmEdit = (staff) => {
            if (this.state.editingStaff === null) {
                // console.log('This should create a new staff member');
                // this.store.dispatch(actions.addStaff(staff));
                props.actions.addStaff(staff);
            } else {
                // console.log('This should update the existing staff member');
                // this.store.dispatch(actions.editStaff(staff));
                props.actions.editStaff(staff);
            }
            this.cancelEdit();
        };
    }

    render() {
        return (
          <div className="staff-default-page">
            Page Content: staff/DefaultPage

            { this.state.showingEdit && <EditStaff staffMember={this.state.editingStaff} cancel={this.cancelEdit} confirm={this.confirmEdit} /> }

            <div>
              <button onClick={this.newStaff} className="btn btn-primary"><i className="icon icon-plus" /> New Staff Member</button>
            </div>

            <StaffList staff={this.props.staff.staffMembers} actions={this.props.actions} />
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
)(DefaultPage);

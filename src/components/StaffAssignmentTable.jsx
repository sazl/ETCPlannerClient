import React from 'react';
import { Table, Button, Glyphicon, Popover, Overlay, OverlayTrigger } from 'react-bootstrap';

class StaffAssignmentTable extends React.Component {
  render() {
    let staffAssignments = this.props.staffAssignments;
    return (
      <Table striped bordered condensed hover>
        <thead>
        </thead>
        <tbody>
          {staffAssignments.map((staffAssignment, i) => {
            return (
              <tr key={staffAssignment.staff.name + '|' + i}>
              <td className="col-md-1 text-center">
              <OverlayTrigger trigger='focus' placement='bottom'
              overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check info.</Popover>}>
              <Button bsSize="xs">
              <Glyphicon glyph="menu-down" />
              </Button>
              </OverlayTrigger>
              </td>
              <td className="col-md-5">{staffAssignment.staff.name}</td>
              <td className="col-md-3">{staffAssignment.start}</td>
              <td className="col-md-3">{staffAssignment.end}</td>
              </tr>
            );
           })}
        </tbody>
      </Table>
    );
  }
}

StaffAssignmentTable.propTypes = {
  staffAssignments: React.PropTypes.array.isRequired
};

module.exports = StaffAssignmentTable;

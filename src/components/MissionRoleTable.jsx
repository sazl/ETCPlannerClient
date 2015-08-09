import React from 'react';
import { Table, Button, Glyphicon, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';

class MissionRoleTable extends React.Component {
  render() {
    let missionRoles = this.props.missionRoles;
    return (
      <div>
      {missionRoles.map((missionRole, i) => {
        return (

          <tr key={missionRole.name + '|' + i} className="warning">
            <td className="col-md-1 text-center">
              <OverlayTrigger trigger='focus' placement='bottom'
                              overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check info.</Popover>}>
                <Button bsSize="xs">
                  <Glyphicon glyph="menu-down" />
                </Button>
              </OverlayTrigger>
            </td>
            <td>{missionRole.name}</td>
            <td>{missionRole.start}</td>
            <td>{missionRole.end}</td>
          </tr>
        );
       })}
      </div>
    );
  }
}

MissionRoleTable.propTypes = {
  missionRoles: React.PropTypes.array.isRequired
};

module.exports = MissionRoleTable;

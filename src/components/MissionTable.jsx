import React from 'react';
import { Table, Button, Glyphicon, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';

class MissionTable extends React.Component {
  render() {
    let missions = this.props.missions;
    return (
      <Table bordered condensed hover>
        <thead>
        </thead>
        <tbody>
          {missions.map((mission, i) => {
            return (

              <tr key={mission + '|' + i} className="info">
              <td className="col-md-1 text-center">
              <OverlayTrigger trigger='focus' placement='bottom'
                              overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check info.</Popover>}>
                <Button bsSize="xs">
                  <Glyphicon glyph="menu-down" />
                </Button>
              </OverlayTrigger>
              </td>
              <td>{mission}</td>
              </tr>
            );
           })}
        </tbody>
      </Table>
    );
  }
}

MissionTable.propTypes = {
  missions: React.PropTypes.array.isRequired
};

module.exports = MissionTable;

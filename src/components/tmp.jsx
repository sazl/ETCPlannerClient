          /*
          <TreeView nodeLabel={<MissionTable missions={[data.mission]}></MissionTable>}>
            {data.missionRoles.map((missionRole, i) => {
              return (
                <TreeView nodeLabel={<MissionRoleTable missionRoles={[missionRole]}/>}>
                <StaffAssignmentTable staffAssignments={missionRole.staffAssignments} />
                </TreeView>
              );
             })}
          </TreeView>
          */

/* empty
    <div className="table table-bordered table-hover">
    <Row>
    <Col md={1}></Col>
    <Col md={2}>Name</Col>
    <Col md={2}>Planned Start Date</Col>
    <Col md={2}>Planned End Date</Col>
    <Col md={2}>Planned Duration</Col>
    </Row>
    {data.map((mission, i) => {
    return (
    <div key={mission+i}>
    <Row>
    <Col md={1}>
    <Button bsSize="xs" onClick={this.collapseMission.bind(this, i)}>
    <Glyphicon glyph="menu-down"/>
    </Button>
    </Col>
    <Col md={2}>{mission.name}</Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    </Row>

    <Collapse in={missionCollapse[0]}>
    <div>
    {mission.missionRoles.map((missionRole, j) => {
    return (
    <div>
    <Row>
    <Col md={1}></Col>
    <Col md={2}>{missionRole.name}</Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    </Row>

    {missionRole.staffAssignments.map((staffAssignment, k) => {
    return (
    <Row>
    <Col md={1}></Col>
    <Col md={2}>{staffAssignment.staff.name}</Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    <Col md={2}></Col>
    </Row>
    );
    })}
    </div>
    );
    })}
    </div>
    </Collapse>
    </div>
    );
    })}
    </div>
  */

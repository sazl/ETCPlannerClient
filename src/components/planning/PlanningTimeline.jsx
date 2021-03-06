import React from 'react/addons';

import vis from 'vis';
import underscore from 'underscore';

import BaseComponent from 'components/BaseComponent';
import Timeline from 'components/planning/Timeline';

import DateUtils from 'utils/date';

import 'styles/timeline.scss';

export default class PlanningTimeline extends BaseComponent {

  confirmedTypeStyle(confirmedType) {
    return `
      color: white;
      background-color: #${confirmedType.colorCode};
      border-color: black;
      text-align: center;
    `;
  }

  processMissions(missions) {
    let items = new vis.DataSet();
    let groups = new vis.DataSet();

    for (let missionIndex in missions) {
      const mission = missions[missionIndex];
      groups.add({
        id: mission.id,
        content: mission.description,
        order: mission.description
      });

      for (let missionRoleIndex in mission.missionRoles) {
        const missionRole = mission.missionRoles[missionRoleIndex];
        if (missionRole.startDate && missionRole.endDate) {
          items.add({
            id: missionRole.id,
            group: mission.id,
            type: 'background',
            className: 'timeline-background-group',
            subgroup: missionRole.id,
            title: missionRole.profileType.profileType,
            content: missionRole.profileType.profileType,
            start: DateUtils.formatISO(missionRole.startDate),
            end: DateUtils.formatISO(missionRole.endDate)
          });
        }

        for (let staffAssingmentIndex in missionRole.staffAssignments) {
          const staffAssignment = missionRole.staffAssignments[staffAssingmentIndex];
          items.add({
            id: 'staffAssignment' + String(staffAssignment.id),
            group: mission.id,
            subgroup: missionRole.id,
            content: staffAssignment.staff.fullName,
            title: staffAssignment.staff.fullName,
            start: DateUtils.formatISO(staffAssignment.startDate),
            end: DateUtils.formatISO(staffAssignment.endDate),
            style: this.confirmedTypeStyle(staffAssignment.confirmedType)
          });
        }
      }
    }

    return {items: items, groups: groups};
  }

  render() {
    const { items, groups } = this.processMissions(this.props.missions);
    const options = { stack: false }; // this.props.options;

    return (
      <div>
        <Timeline
         items={items}
         groups={groups}
         options={options}
         startDate={this.props.startDate}
         endDate={this.props.endDate}
        />
      </div>
    );
  }
}

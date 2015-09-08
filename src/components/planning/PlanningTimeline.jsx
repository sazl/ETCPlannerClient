import React from 'react/addons';

import vis from 'vis';

import BaseComponent from 'components/BaseComponent';
import Timeline from 'components/planning/Timeline';

import DateUtils from 'utils/date';

export default class PlanningTimeline extends BaseComponent {

  processMissions(missions) {
    let items = new vis.DataSet();
    let groups = new vis.DataSet();

    for (let missionIndex in missions) {
      const mission = missions[missionIndex];
      groups.add({id: mission.id, content: mission.description});

      for (let missionRoleIndex in mission.missionRoles) {
        const missionRole = mission.missionRoles[missionRoleIndex];
        if (missionRole.startDate && missionRole.endDate) {
          items.add({
            id: missionRole.id,
            group: mission.id,
            content: missionRole.profileType.profileType,
            start: DateUtils.formatISO(missionRole.startDate),
            end: DateUtils.formatISO(missionRole.endDate)
          });
        }
      }
    }

    return {items: items, groups: groups};
  }

  render() {
    const { items, groups } = this.processMissions(this.props.missions);
    return (
      <div>
        <Timeline
         items={items}
         groups={groups}
         options={this.props.options}
        />
      </div>
    );
  }
}

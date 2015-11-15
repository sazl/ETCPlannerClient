import React from 'react/addons';
import BaseComponent from 'components/BaseComponent';
import vis from 'vis';
import KeyUtils from 'utils/keys';

import 'vis/dist/vis.css';

export default class Timeline extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      identifier: KeyUtils.getKey('timeline'),
      timeline: null
    };
  }

  componentDidMount() {
    const items = new vis.DataSet(this.props.items);
    const container = React.findDOMNode(this.refs[this.state.identifier]);
    const timeline = new vis.Timeline(container, items, this.props.options);
    timeline.addCustomTime(new Date(), 'timeline-start-date');
    timeline.addCustomTime(new Date(), 'timeline-end-date');
    this.setState({ timeline: timeline, container: container });
  }

  componentWillReceiveProps(props) {
    const timeline = this.state.timeline;
    timeline.setItems(props.items);
    timeline.setGroups(props.groups);
    timeline.setOptions(props.options);
    if (props.startDate) {
      timeline.setCustomTime(props.startDate, 'timeline-start-date');
    }
    if (props.endDate) {
      timeline.setCustomTime(props.endDate, 'timeline-end-date');
    }
    timeline.redraw();
    if (props.startDate && props.endDate) {
      timeline.setWindow(props.startDate, props.endDate);
    } else {
      timeline.fit();
    }
  }

  render() {
    return (
      <div>
        <div ref={this.state.identifier}>
        </div>
      </div>
    );
  }
}

Timeline.defaultProps = {
  items: [],
  options: {width: '100%'},
  groups: {}
};

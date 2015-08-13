
class StaffCard extends React.Component {
  render() {
    return (
      <div className="media" style={{marginLeft: 20}}>
        <div className="media-left media-middle">
          <a href="#">
            <img className="media-object" width="40" height="40" src="" alt=""/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.data.firstName}
            {this.props.data.lastName}
          </h4>
          {this.props.data.title}
          <div>
            <div className="label label-success">
              {this.props.data.staffRole.startDate}
            </div>
            <span style={{marginLeft: 5, marginRight: 5}}>to</span>
            <div className="label label-warning">
              {this.props.data.staffRole.endDate}
            </div>
          </div>
        </div>
        <hr style={{marginBottom: 0}}></hr>
      </div>
    );
  }
}

StaffCard.propTypes = {
  data: React.PropTypes.object
};

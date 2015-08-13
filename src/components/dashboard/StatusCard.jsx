import React from 'react/addons';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

class StatusCard extends React.Component {
  render() {
    var classString = 'panel panel-' + this.props.bsStyle;
    return (
      <div className={classString}>
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <div className="huge">{this.props.heading}</div>
                <div className="large"><strong>{this.props.subheading}</strong></div>
              </div>
            </div>
          </div>
        </div>
        {this.props.link &&
        <Link to={this.props.link}>
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right">
              <Glyphicon glyph="circle-arrow-right"></Glyphicon>
            </span>
            <div className="clearfix"></div>
          </div>
        </Link>
        }
      </div>
    );
  }
}

StatusCard.propTypes = {
  bsStyle: React.PropTypes.string.isRequired,
  heading: React.PropTypes.string.isRequired,
  subheading: React.PropTypes.string.isRequired,
  link: React.PropTypes.string
};

module.exports = StatusCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Mapillary from 'mapillary-js';
import 'mapillary-js/dist/mapillary.min.css';

class MapillaryViewer extends Component {
  componentDidMount() {
    this.viewer = new Mapillary.Viewer(
      // Improvement pass a native element
      'mapillary-viewer',
      this.props.clientId,
    );
    // Initialize with .moveToKey because passing the imageKey in the constructor
    // does not update the viewer until the user clicks explore
    this.viewer.moveToKey(this.props.imageKey);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.imageKey !== nextProps.imageKey) {
      this.viewer.moveToKey(nextProps.imageKey);
    }
  }

  render() {
    return (
      <div
        id="mapillary-viewer"
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

MapillaryViewer.propTypes = {
  clientId: PropTypes.string.isRequired,
  imageKey: PropTypes.string,
};

MapillaryViewer.defaultProps = {
  imageKey: '',
};

export {
  MapillaryViewer,
};

export default MapillaryViewer;

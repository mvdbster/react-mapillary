import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Mapillary from 'mapillary-js';

class MapillaryViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilt: 90,
      fov: 55,
      transition: false,
    };
  }

  componentDidMount() {
    this.viewer = new Mapillary.Viewer(
      'mapillary-viewer',
      this.props.clientId,
      null,
      this.props.options,
    );
    // Initialize with .moveToKey because passing the imageKey in the constructor
    // does not update the viewer until the user clicks explore
    this.viewer.on(Mapillary.Viewer.nodechanged, (event) => {
      this.setState({ transition: true });
      if (this.props.onNodeChanged) {
        this.props.onNodeChanged(event);
      }
    });

    /* eslint-disable no-underscore-dangle */
    this.viewer._container.renderService.renderCamera$.subscribe(
      this.handleCameraChanges.bind(this),
    );

    this.viewer._container.renderService.bearing$.subscribe(
      this.handleBearingChanges.bind(this),
    );

    this.handleWindowResize = this.handleWindowResize.bind(this);
    window.addEventListener('resize', this.handleWindowResize);
    if (this.props.filter) {
      this.viewer.setFilter(this.props.filter);
    }
    this.viewer.moveToKey(this.props.imageKey);
    this.viewer.on(Mapillary.Viewer.moveend, () => this.setState({ transition: false }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageKey !== prevProps.imageKey) {
      this.viewer.moveToKey(this.props.imageKey);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.viewer.resize();
  }

  handleBearingChanges(bearing) {
    if (this.props.onBearingChanged && !this.state.transition) {
      this.props.onBearingChanged(bearing);
    }
  }

  handleCameraChanges(camera) {
    // subscripte to tilt changes
    const tilt = (camera.rotation.theta * 180) / Math.PI;
    if (tilt !== this.state.tilt && !this.state.transition) {
      if (this.props.onTiltChanged) {
        this.props.onTiltChanged(tilt);
      }
      this.setState({ tilt });
    }

    const fov = camera.perspective.fov;
    if (fov !== this.state.fov && !this.state.transition) {
      if (this.props.onFovChanged) {
        this.props.onFovChanged(fov);
      }
      this.setState({ fov });
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
  onNodeChanged: PropTypes.func,
  onBearingChanged: PropTypes.func,
  onTiltChanged: PropTypes.func,
  onFovChanged: PropTypes.func,
  options: PropTypes.object,
  filter: PropTypes.array,
};

MapillaryViewer.defaultProps = {
  imageKey: '',
  filter: null,
  onNodeChanged: () => { },
  onBearingChanged: () => { },
  onTiltChanged: () => { },
  onFovChanged: () => { },
  options: null,
};

export {
  MapillaryViewer,
};

export default MapillaryViewer;

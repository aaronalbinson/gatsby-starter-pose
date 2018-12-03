import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import posed from "react-pose";

const Zoomable = posed.div({
  fullscreen: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    flip: true,
    zIndex: "1"
  },
  idle: {
    position: "static",
    width: "100%",
    height: "auto",
    flip: true,
    zIndex: "1"
  }
});

class ImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  zoomIn() {
    this.setState({ active: true });
  }

  zoomOut = () => {
    this.setState({ active: false });
  };

  toggleZoom = () => (this.state.active ? this.zoomOut() : this.zoomIn());

  render() {
    return (
      <Zoomable
        className="zoomable"
        pose={this.state.active ? "fullscreen" : "idle"}
        onClick={this.toggleZoom}
      >
        <PreviewCompatibleImage imageInfo={this.props.imageInfo} />
      </Zoomable>
    );
  }
}

export default ImageZoom;

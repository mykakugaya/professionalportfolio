import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import SpacehubPrev from "../../images/spacehubPreview.jpg";
import MonopolyPrev from "../../images/monopolyPreview.jpg";
import JothefishPrev from "../../images/jothefishPreview.PNG";
import {Button} from "react-bootstrap";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import "./style.css";


const images = [
  JothefishPrev,
  SpacehubPrev,
  MonopolyPrev
];

export default class PortfolioPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: props.index,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;


    return (
      <div>
        <Button type="button outline-primary" className="prevBtn" onClick={() => this.setState({ isOpen: true })}>
          <ZoomInIcon/> Preview
        </Button>

        {isOpen && (
          <Lightbox
            className="popup"
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
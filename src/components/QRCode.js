import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qrcode from 'qrcode';

class QRCode extends Component {
  static propTypes = {
    value: PropTypes.string,
    size: PropTypes.number,
    fgColor: PropTypes.string,
  };

  static defaultProps = {
    value: '',
    size: 160,
    fgColor: '#000',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { value, size, fgColor } = this.props;
    if (!value) return;
    qrcode.toCanvas(this.canvas, value, {
      width: size,
      color: {
        dark: fgColor,
      },
      margin: 0,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value, size, fgColor } = nextProps;
    if (!value) return;
    qrcode.toCanvas(this.canvas, value, {
      width: size,
      color: {
        dark: fgColor,
      },
      margin: 0,
    });
  }

  render() {
    const { size } = this.props;
    return (
      <canvas
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      >
        canvas
      </canvas>
    );
  }
}

export default QRCode;

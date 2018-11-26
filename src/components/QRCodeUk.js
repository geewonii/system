import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import QRCode from './QRCode';
import { getAppDownloadUrl } from '@/services/authentication';

class QRCodeUk extends Component {
  static propTypes = {
    size: PropTypes.number,
  };

  static defaultProps = {
    size: 128,
  };

  state = {
    url: '',
    loading: false,
  };

  componentDidMount() {
    this.loadUrl();
  }

  loadUrl = () => {
    this.setState({ loading: true });
    getAppDownloadUrl().then(
      res => {
        console.log(res);
        this.setState({ url: res, loading: false });
      },
      err => {
        console.error(err);
        this.setState({ loading: false });
      }
    );
  };

  handleClick = () => {
    const { loading } = this.state;
    if (loading) return;
    this.loadUrl();
  };

  render() {
    const { size } = this.props;
    const { url, loading } = this.state;

    const wrapStyle = {
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-block',
      position: 'relative',
    };
    const maskStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.8)',
    };
    const iconStyle = {
      fontSize: '30px',
      fontWeight: 'bold',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
    return (
      <div style={wrapStyle}>
        <QRCode value={url} {...this.props} />
        {!url && (
          <div style={maskStyle} onClick={this.handleClick}>
            <Icon style={iconStyle} spin={loading} type="sync" />
          </div>
        )}
      </div>
    );
  }
}

export default QRCodeUk;

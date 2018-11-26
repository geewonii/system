import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Checkbox, Alert } from 'antd';
import Login from '@/components/Login';
import QRCodeUk from '@/components/QRCodeUk';
import logo from '@/assets/img_login_logo.png';
import styles from './Login.less';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  changeRemanber = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src={logo} />
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <Login
            className={styles.logins}
            onSubmit={this.handleSubmit}
            ref={form => {
              this.loginForm = form;
            }}
          >
            {login.status === 'error' &&
              !submitting &&
              this.renderMessage(formatMessage({ id: 'app.login.message-invalid-credentials' }))}
            <UserName name="userName" placeholder="请输入账号" />
            <Password
              name="password"
              placeholder="请输入密码: 6"
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
            <div>
              <Checkbox checked={autoLogin} onChange={this.changeRemanber}>
                <FormattedMessage id="app.login.remember-me" />
              </Checkbox>
            </div>
            <Submit loading={submitting}>
              <FormattedMessage id="app.login.login" />
            </Submit>
          </Login>
          <div className={styles.qrcode}>
            <p>打开手机，扫描二维码下载</p>
            <QRCodeUk size={160} fgColor="#666" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

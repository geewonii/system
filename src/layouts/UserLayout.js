import React, { Fragment } from 'react';
// import { formatMessage } from 'umi/locale';
import GlobalFooter from '@/components/GlobalFooter';
// import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';

const links = [];

const copyright = (
  <Fragment>
    <p style={{ color: '#fff' }}>
      <span style={{ marginRight: '20px' }}>版权所有：广州玄武信息科技有限公司</span>
      <a
        style={{ color: '#fff', textDecoration: 'underline' }}
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.miitbeian.gov.cn"
      >
        备案号：粤ICP备17055080号
      </a>
      <span style={{ marginLeft: '20px' }}>授权：{'authCompany'}</span>
    </p>
  </Fragment>
);

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.lang}>{/* <SelectLang /> */}</div>
        <div className={styles.content}>{children}</div>
        <GlobalFooter links={links} copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;

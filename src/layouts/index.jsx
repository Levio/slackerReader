import styles from './index.less';
import React from 'react';
import { headerList, tabList } from './config';
import classnames from 'classnames';
import Sider from './components/Sider/Sider';
import Filelist from './components/FIleList/Filelist';
import IconFont from '../components/Icon/Icon';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['header-icon']}></div>
        {headerList.map(item => {
          return (
            <div className={styles['header-item']} key={item.key}>
              {item.name}({item.shortcut})
            </div>
          );
        })}
        <div className={styles['window-opt']}>
          <IconFont type="icon-zuixiaohua"></IconFont>
          <IconFont type="icon-zuidahua-copy"></IconFont>
          <IconFont type="icon-guanbi"></IconFont>
        </div>
      </div>
      <div className={styles.body}>
        <Sider></Sider>
        <Filelist></Filelist>
        <div className={styles.main}>
          <div className={styles['main-tab']}>
            {tabList.map((tab, index) => {
              return (
                <div className={classnames(styles.tab, tab.active && styles.active)} key={index}>
                  <IconFont type="icon-file" style={{ marginRight: 5, fontSize: 12 }}></IconFont>
                  {tab.name}
                </div>
              );
            })}
            <IconFont
              type="icon-sandian"
              style={{ marginLeft: 'auto', marginRight: 10, color: '#c4cccc' }}
            ></IconFont>
          </div>
          <div className={styles.sourcemap}>{`src > layout > components > Menu > Menu`}</div>
          <div className={styles.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;

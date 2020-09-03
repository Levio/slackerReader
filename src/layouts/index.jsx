import styles from './index.less';
import { headerList } from './config';
import Sider from './components/Sider/Sider';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['header-icon']}></div>
        {headerList.map((item) => {
          return (
            <div className={styles['header-item']} key={item.key}>
              {item.name}({item.shortcut})
            </div>
          );
        })}
      </div>
      <div className={styles.body}>
        <Sider></Sider>
        <div className={styles['file-list-box']}></div>
        <div className={styles.main}></div>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;

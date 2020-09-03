import styles from './index.less';
import { headerList } from './config';

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
        <div className={styles['sider-bar']}></div>
        <div className={styles['file-list-box']}></div>
        <div className={styles.main}></div>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;

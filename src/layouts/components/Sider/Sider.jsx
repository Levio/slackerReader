import styles from './sider.less';
import IconFont from '@/components/Icon/Icon';
import classnames from 'classnames';
import { sideTopList, sideBottomList } from '../../config';

const Sider = props => {
  const renderIcons = source => {
    return source.map(item => {
      return (
        <div className={classnames(styles.item, item.active && styles.active)} key={item.key}>
          <IconFont
            type={item.icon}
            className={styles.icon}
            style={{
              color: item.active ? '#fff' : '#858585',
              fontSize: item.size || 20,
              fontWeight: 'bold',
            }}
          ></IconFont>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>{renderIcons(sideTopList)}</div>
      <div className={styles.bottom}>{renderIcons(sideBottomList)}</div>
    </div>
  );
};

export default Sider;

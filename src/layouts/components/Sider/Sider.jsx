import styles from './sider.less';
import IconFont from '@/components/Icon/Icon';

const Sider = props => {
  const sideTopList = [
    {
      key: 'file',
      icon: 'icon-file-white',
    },
    {
      key: 'search',
      icon: '',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {sideTopList.map(item => {
          return (
            <div className={styles.item} key={item.key}>
              <IconFont
                type={item.icon}
                style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
              ></IconFont>
            </div>
          );
        })}
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Sider;

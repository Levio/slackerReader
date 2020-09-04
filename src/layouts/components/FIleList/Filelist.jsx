import styles from './filelist.less';
import IconFont from '../../../components/Icon/Icon';
import classnames from 'classnames';
import treeData from './tree';

const Filelist = props => {
  const renderArrow = (deg = 0) => {
    return (
      <IconFont
        type="icon-arrow-right"
        style={{ fontSize: 15, transform: `translateY(2px) rotate(${deg}deg)` }}
      ></IconFont>
    );
  };

  const renderRow = (text, children, deg) => {
    return (
      <div className={classnames(styles.row)}>
        <div>
          {renderArrow(deg)}
          <span>{text}</span>
          {children}
        </div>
      </div>
    );
  };

  const renderDot = status => {
    return status ? (
      <div>{status}</div>
    ) : (
      <div
        className={styles.dot}
        style={{ backgroundColor: status === 'M' ? '#dcb67a' : '#0DBC79' }}
      ></div>
    );
  };

  const renderTree = data => {
    return data.map((item, index) => {
      const IconNode =
        item.type === 'file' ? (
          <IconFont type="icon-file" style={{ marginRight: 5 }}></IconFont>
        ) : (
          renderArrow(item.open && 90)
        );
      const DotNode = item.status ? renderDot(item.status !== 'dot' && item.status) : null;
      return (
        <div key={item.name + index}>
          <div
            key={item.name + index}
            className={classnames(styles.row, styles[item.status], styles[item.ignore && 'ignore'])}
            style={{ borderBottom: 'none' }}
          >
            <div>
              {IconNode}
              <span>{item.name}</span>
            </div>
            {DotNode}
          </div>
          <div className={styles.children}>
            {item.children?.length && renderTree(item.children)}
          </div>
        </div>
      );
    });
  };

  const renderList = () => {
    return (
      <div className={styles.list}>
        <div className={classnames(styles.row)} style={{ borderBottom: 'none' }}>
          <div>
            {renderArrow(90)}
            <span>SLACKERREADER</span>
          </div>
          {renderDot()}
        </div>
        <div className={styles.children}>{renderTree(treeData)}</div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>资源管理器</span>
        <IconFont type={'icon-sandian'}></IconFont>
      </div>
      {renderRow('打开的编辑器', <span className={styles.unsave}>2个未保存</span>)}
      {renderList()}
      {renderRow('大纲')}
      {renderRow('时间轴')}
      {renderRow('NPM脚本')}
    </div>
  );
};

export default Filelist;

import styles from './index.less';
import classnames from 'classnames';
import { useState } from 'react';

export default function(props) {
  console.log(props);
  const [content, setContent] = useState('');
  const onchange = input => {
    if (window.FileReader) {
      const reader = new FileReader();
      const file = input.target.files[0];
      reader.readAsText(file);
      reader.onload = function() {
        const data = reader.result; //base64形式的文件内容
        setContent(data);
      };
      reader.onprogress = function() {
        const data = reader.result;
        setContent(data);
      };
      reader.onerror = function() {
        console.log('读取失败');
        console.log(reader.error);
      };
    }
  };
  return (
    <div className={styles.container}>
      <div className={classnames(!props.input && styles.show, styles.box)}>
        <input type="file" onChange={onchange} />
      </div>
      <div className={classnames(props.input && styles.show, styles.box)}>{content}</div>
    </div>
  );
}

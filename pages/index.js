import { useRecoilState } from 'recoil';
import styles from '../styles/Home.module.scss';
import { todoListState } from '../recoil/atom/todoList';

export default function Home() {
  const [todoList] = useRecoilState(todoListState);

  return (
    <div className={styles.container}>
      <div className="flex flex-col">
        {todoList?.map(item => (
          <span className="text-gray-900">{item.title}</span>
        ))}
      </div>
    </div>
  );
}

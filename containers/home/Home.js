import { useRecoilState } from 'recoil';
import styles from './Home.module.scss';
import { todoListState } from '../../recoil/atom/todoList';

const Home = () => {
  const [todoList] = useRecoilState(todoListState);

  return (
    <div className={styles.home}>
      <div className="flex flex-col">
        {todoList?.map(item => (
          <span className="text-gray-900">{item.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Home;

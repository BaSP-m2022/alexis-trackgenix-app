import styles from './home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className={styles.container}>
      <h2>Home</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.linkButton}>
          <Link to="admin" className={styles.link}>
            Admin
          </Link>
        </button>
        <button className={styles.linkButton}>
          <Link to="employee" className={styles.link}>
            Employee
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Home;

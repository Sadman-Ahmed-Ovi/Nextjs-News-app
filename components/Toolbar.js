import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

const Toolbar = () => {
    const router = useRouter();
    return (
      <div className={styles.main}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/feed/1")}>Feed</div>
        <div onClick={() => router.push("/eom")}>EOM</div>
        <div
          onClick={() => (window.location.href = "https://www.linkedin.com/in/sadman-ahmed-15aba1175/")}
        >
          Linkedin
        </div>
      </div>
    );
};

export default Toolbar;
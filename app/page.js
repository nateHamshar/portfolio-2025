import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Home | W Hamshar',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeader}>Hello world, I'm Nate.</h1>
        <p className={styles.heroText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quo?</p>
        <Link href={'/projects'} className={styles.heroLink}>Check out my works</Link>
        <Link href={'/resume'} className={styles.heroLink}>See my resume</Link>
      </section>
        
    </main>
  );
}

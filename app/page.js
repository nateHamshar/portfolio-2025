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
      <h1>Weeeee WOOOOOO</h1>
      <p className="testp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius, eos quasi labore dignissimos dolorum perspiciatis in id ea earum cumque, aliquam harum, voluptate voluptates fugit maiores? Qui, sint fugit quod, voluptates voluptas temporibus minus sit commodi corrupti earum architecto!</p>
      <Link href="/projects">test</Link>
    </main>
  );
}

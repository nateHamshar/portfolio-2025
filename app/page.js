import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from './components/Navbar'
import Image from 'next/image';

export const metadata = {
  title: 'Home | W Hamshar',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeader}>Hey, I'm <span className={styles.nameSpan}>Nate!</span></h1>
          <p className={styles.heroText}>FULL-STACK DEVELOPER</p>
          <div className={styles.heroLinksDiv}>
            <Link href={'/projects'} className={styles.heroLink}>View Projects</Link>
            <Link href={'/resume'} className={styles.heroLink}>My Resume</Link>
          </div>
        </div>
      </section>
        
      <section className={styles.introSection}>
        <div className={styles.topSlant}></div>

        <div className={styles.introContent}>

          <div className={styles.introBlock}>
            <Image 
              src='/brain-sm.png'
              height={64}
              width={64}
              className={styles.brain}
            />
            <h2 className={styles.blockHeader}>About Me</h2>
            <p className={styles.blockText}>I've been developing for multiple years now, and love to learn new technologies. I have a passion for creating beautiful projects that give users the best experience possible!</p>
          </div>

          <div className={styles.introBlock}>
            <Image 
              src='/brain-sm.png'
              height={64}
              width={64}
              className={styles.brain}
            />
            <h2 className={styles.blockHeader}>Front-End Skills</h2>
            <p className={styles.blockText}>I consider front-end development to be my strongsuit, mainly in the TS/JS realm, and most of my experience is in React/Next. I've worked on multiple projects using some of the most common libraries including Bootstrap, Tailwind, SASS, Framer Motion, etc. I also have using the data visualization libraries D3 and Chart.js.</p>
          </div>

          <div className={styles.introBlock}>
            <Image 
              src='/brain-sm.png'
              height={64}
              width={64}
              className={styles.brain}
            />
            <h2 className={styles.blockHeader}>Back-End Skills</h2>
            <p className={styles.blockText}>I'm most comfortable using Node.js and Express when building back-ends. and my preferred database combo is Mongo & Mongoose. However, I also have experience working with SQL and MySQL. And most recently using Python and Flask to build APIs.</p>
          </div>

          <div className={styles.introBlock}>
            <Image 
              src='/brain-sm.png'
              height={64}
              width={64}
              className={styles.blockImage}
            />
            <h2 className={styles.blockHeader}>Tools</h2>
            <p className={styles.blockText}>My preferred code editor is VS code, but when I'm writing in Java I use the EclipseIDE. I am very comfortable with Git and Github for version control. I have working knowledge of AWS, Docker, and Postman. </p>
          </div>

        </div>

        <div className={styles.bottomSlant}></div>
      </section>

    </main>
  );
}

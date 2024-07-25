
import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from './components/Navbar'
import Image from 'next/image';
import Project from "./components/Project"
import "./components/project.css"
export const metadata = {
  title: 'Home | W Hamshar',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeader}>Hey, I&apos;m <span className={styles.nameSpan}>Nate!</span></h1>
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
            
            <div className={styles.blockImage}>
              <Image 
                src='/user-icon.png'
                fill={true}
                className={styles.brain}
                alt="section icon"
              /></div>
            <h2 className={styles.blockHeader}>About Me</h2>
            <p className={styles.blockText}>Originally a self-taught dev, enjoying the SDLC as a hobby. Projected to have a BS in Information Technology with web and mobile programming cognate mid 2025. Self-proclaimed coffee snob, husky wrangler, and video game addict.</p>
          </div>

          <div className={styles.introBlock}>
            <div className={styles.blockImage}>
              <Image 
                src='/404-icon.png'
                fill={true}
                className={styles.brain}
                alt="section icon"
              /></div>
            <h2 className={styles.blockHeader}>Front-End Skills</h2>
            <p className={styles.blockText}>I consider front-end development to be my strongsuit, mainly in the TS/JS realm, and most of my experience is in React/Next. I&apos;ve worked on multiple projects using some of the most common libraries including Bootstrap, Tailwind, SASS, Framer Motion, etc. I also have using the data visualization libraries D3 and Chart.js.</p>
          </div>

          <div className={styles.introBlock}>
            <div className={styles.blockImage}>
              <Image 
                src='/circuit-icon.png'
                fill={true}
                className={styles.brain}
                alt="section icon"
              />
              </div>
            <h2 className={styles.blockHeader}>Back-End Skills</h2>
            <p className={styles.blockText}>I&apos;m most comfortable using Node.js and Express, and my preferred database combo is Mongo & Mongoose. However, I also have experience working with SQL and MySQL. Recently started using Python and Flask to build APIs.</p>
            
          </div>

          <div className={styles.introBlock}>
            <div className={styles.blockImage}>
              <Image 
                src='/tools-icon.png'
                fill={true}
                className={styles.blockImage}
                alt="section icon"
              />
            </div>
            <h2 className={styles.blockHeader}>My Toolkit</h2>
            <p className={styles.blockText}>My preferred code editor is VS code, but when I&apos;m writing in Java I use the EclipseIDE. I am very comfortable with Git and Github for version control. I have working knowledge of AWS, Docker, and Postman. </p>
          </div>

        </div>

        <div className={styles.bottomSlant}></div>
      </section>


      <section className={styles.projectsSection}>
        <Project imgURL={'404-icon.png'} 
            header={"Wahoo BBQ Restaurant"}
            text={"This product was built for a new restaurant in my area. It is a Next app, utilizes multiple React Bootstrap components, and has animations powered by Framer Motion."}
            source={"https://github.com/nateHamshar/wahoobbq"}
            live={"https://wahoobbq.vercel.app"}
          />


      </section>

    </main>
  );
}

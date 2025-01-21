import "./components/project.css"
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
            <Link href={'#projectsSection'} className={styles.heroLink}>View Projects</Link>
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
      <section className={styles.projectsSection} id="projectsSection">
        <div className={styles.projectHeaderDiv}>
          <h1 className={styles.projectHeader}>MY PROJECTS</h1>
          <div className={styles.projectHeaderImage}>
            <Image src='/project-management.png'
              fill={true}
              alt="lightbulb with gears"
            />
          </div>
        </div>
        <div className={styles.projectCard}>
        <Project imgURL={'cuppaJoe.JPG'} 
            header={"Cuppa Joe Cafe"}
            text={"Website for the coffee shop I work at. Built with Next, hosted on Vercel. Worked with a graphic designer and the business owner to bring the owner's vision to life!"}
            source={"https://github.com/nateHamshar/cuppa-joe-cafe"}
            live={"https://cuppajoecafe.vercel.app"}
          />
          </div>
          <div className={styles.projectCard}>
        <Project imgURL={'wahoobbq.JPG'} 
            header={"Wahoo BBQ"}
            text={"This project is a revamp of a restaurants old website. Built with Next.js and hosted on Vercel. Uses multiple components from React Bootstrap and includes animations from Framer Motion."}
            source={"https://github.com/nateHamshar/wahoobbq"}
            live={"https://wahoobbq.vercel.app"}
          />
          </div>
        <div className={styles.projectCard}>
        <Project imgURL={'personalizednews.JPG'} 
            header={"Personalized News App"}
            text={"This app requires its user to pick topics they enjoy, and then retrieves news articles that they may enjoy. It is built with Next.js, and is hosted on Vercel."}
            source={"https://github.com/nateHamshar/personalized-news"}
            live={"https://personalized-news.vercel.app"}
          />
          </div>
          <div className={styles.projectCard}>
        <Project imgURL={'personalizednews.JPG'} 
            header={"Loan Calculator"}
            text={"This loan calculator provides payment information and a chart  It is built with Next.js and is hosted on Vercel."}
            source={"https://github.com/nateHamshar/loan-calculator-app"}
            live={"https://natehamshar.github.io/loan-calculator-app/"}
          />
          </div>
          <div className={styles.projectCard}>
        <Project imgURL={'personalizednews.JPG'} 
            header={"Salon Website"}
            text={"This website was built for a salon in my area that wanted to revamp their old Wordpress site. It is built using Next and is being hosted on Vercel."}
            source={"https://github.com/nateHamshar/salon-deshano"}
            live={"https://salondeshano.vercel.app/"}
          />
          </div>
        
          
      </section>


      <section className={styles.contactSection}>
        <div className={styles.topSlant}></div>

        <div className={styles.contactContent}>
        
          <h1 className={styles.contactHeader}>Let&apos;s get in touch<span className={styles.contactSpan}>!</span></h1>
        
          <div className={styles.contactItem}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff4500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path fillRule="evenodd" clipRule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#ff4500"/>
            </svg>
            <a className={styles.contactEmail} href="mailto:williamhamshar@gmail.com" target="_blank">williamhamshar@gmail.com</a>
          </div>
        
          <div className={styles.contactItem}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff4500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fillRule="#ff4500"/>
            </svg>
            <Link href={"https://www.linkedin.com/in/william-hamshar/"} target='_blank' className={styles.contactLinkedIn}>LinkedIn <span className={styles.rotate45}>-&gt;</span></Link> 
          </div>
        
          <div className={styles.contactItem}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff4500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" fill="#ff4500"/>
            </svg>
            <Link href={"https://github.com/nateHamshar"} target='_blank' className={styles.contactLinkedIn}>Github <span className={styles.rotate45}>-&gt;</span></Link> 
          </div>


        </div>        
      </section>

    </main>
  );
}

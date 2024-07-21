import NavbarComponent from '../components/Navbar';
import './page.css'

export const metadata = {
    title: 'Projects',
  };

const Projects = () => {
    return (
        <main>
            <NavbarComponent />
            <h1>projects page</h1>
        </main>
    );
}
 
export default Projects;
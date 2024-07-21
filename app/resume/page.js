import NavbarComponent from "../components/Navbar";
import "./page.css"

export const metadata = {
    title: 'Resume',
  };


const Resume = () => {
    return (
        <main>
            <NavbarComponent />
            <h1>resume page</h1>
        </main>
        
    );
}
 
export default Resume;
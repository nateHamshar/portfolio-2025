import NavbarComponent from "../components/Navbar";
import './page.css'

export const metadata = {
    title: 'Contact',
  };
  
const Contact = () => {
    return (
        <main>
            <NavbarComponent />
            <h1>this is contact page</h1>
        </main>
    );
}
 
export default Contact;
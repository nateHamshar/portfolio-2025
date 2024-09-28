import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="infoDiv">
                <h1 className="header">Let's get in touch!</h1>
                <p className="name">William Hamshar</p>
                <p className="email">williamhamshar@gmail.com</p>
                <Link href={"https://www.linkedin.com/in/william-hamshar/"} target='_blank' className="linkedIn">LinkedIn -&gt;</Link>
            </div>
            <div className="quickLinks">
                <h1 className="quickLinksHeader">Quick Links</h1>
                <Link href={'/'} className='footerLink'>Home</Link>
                <Link href={'https://github.com/nateHamshar'} target='_blank' className='footerLink'>Github</Link>
                <Link href={'/resume'}
                className='footerLink'>Resume</Link>
                
                <Link href={'/contact'}>Contact</Link>
            </div>
        </footer>
    );
}
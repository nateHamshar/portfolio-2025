import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="infoDiv">
                
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
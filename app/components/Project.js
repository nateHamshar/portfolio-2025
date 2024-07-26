import Image from 'next/image';
import "./project.css"
import Link from 'next/link'

const Project = ({imgURL, header, text, source, live, alt}) => {
    return (
        <>
        <container className='projectContainer'>
            
            <div className='imageDiv'>
                <Image src={`/${imgURL}`} 
                    className='projectImage'
                    fill={true}
                    alt={alt}
                />
            </div>
            <div className="content">
                <h1 className='projectHeader'>{header}</h1>
                <p className='description'>{text}</p>
                <div className='linksDiv'>
                    <Link href={source} target='_blank' className='sourceLink'>View Code</Link>
                    <Link href={live} target='_blank'className='liveLink'>Live </Link>
                </div>
            </div>
        </container>
        </>
    );
}
 
export default Project;
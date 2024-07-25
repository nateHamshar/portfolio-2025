import Image from 'next/image';
import "./project.css"


const Project = ({imgURL, header, text, source, live, alt}) => {
    return (
        <container className='projectContainer'>
            <div className='imageDiv'>
                <Image src={`/${imgURL}`} 
                    className='projectImage'
                    height={175}
                    width={350}
                    alt={alt}
                />
            </div>
            <div className="content">
                <h1 className='projectHeader'>{header}</h1>
                <p className='description'>{text}</p>
                <div className='linksDiv'>
                    <a href={source} target='_blank' className='sourceLink'>View Code</a>
                    <a href={live} target='_blank'className='liveLink'>Live <span className='arrow'>-&gt;</span></a>
                </div>
            </div>
        </container>
    );
}
 
export default Project;
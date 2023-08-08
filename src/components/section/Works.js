import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'
import ReactPlayer from 'react-player'
import vi from "../section/vi1.mp4";
import "./Works.css";

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <div key={x.id} id={x.id} className='project'>
                    <ReactPlayer url={vi} controls={true} />
                   <div className='sub_project'>
                        <h4><b>{x.name} :</b> <i>{x.skills}</i></h4>
                        <p>{x.about}</p>
                        <button className="learn-more-button">
                        Learn More
                        </button>

                    </div>
                    {/* <Project key={x.id} id={x.id} name={x.name} skills={x.skills} /> */}
                    </div>
                )}
                </div>
            </div>

            {/* <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <div key={x.id} id={x.id} className=''>
                        <ReactPlayer url={vi} controls={true} />
                            <h4>{x.name}:{x.skills}</h4>
                            <p>jkfjodis hsuihdf jhifhs hsifhsh </p>
                            <button>Learn More</button> */}
                        {/* <Project key={x.id} id={x.id} name={x.name} /> */}
                        {/* </div>
                    )}
                </div>
            </div> */}
        </>
    )
}

export default Works

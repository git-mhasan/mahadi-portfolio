import React from 'react';

const ProjectCard = ({ project }) => {
    const { projName, img, tech } = project;
    return (
        <div>
            <div className="card w-md glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">{projName}</h2>
                    <p className='text-sm'><span className='font-bold'>Technology Used:</span> {tech}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-accent">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
import React from 'react';

const ProjectCard = ({ project }) => {
    const { projName, img, desc } = project;
    return (
        <div>
            <div className="card w-md glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{projName}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-accent">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
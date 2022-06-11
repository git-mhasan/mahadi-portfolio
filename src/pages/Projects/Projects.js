import React from 'react';
import useProjects from '../../hooks/useProjects';
import ProjectCard from '../../shared/ProjectCard';

const Projects = () => {

    const projects = useProjects();

    return (
        <div className='mx-6 md:mx-16'>
            <div className='flex justify-center my-16'><h2 className='text-4xl text-black-500'>Projects</h2></div>
            <div className='m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>

    );
};

export default Projects;
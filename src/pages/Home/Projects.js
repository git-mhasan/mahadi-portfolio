import React from 'react';
import ProjectCard from '../../shared/ProjectCard';

const Projects = () => {
    const projects = [
        {
            _id: 1,
            projName: "Horizon Ltd.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam doloremque beatae hic officia sint?",
            img: "https://api.lorem.space/image/movie?w=200&h=280",
            liveLink: "https://api.lorem.space/image/album?w=400&h=400",
            codeClient: "https://api.lorem.space/image/album?w=400&h=400",
            codeServer: "https://api.lorem.space/image/album?w=400&h=400",
        },
        {
            _id: 2,
            projName: "Green Tech",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam doloremque beatae hic officia sint?",
            img: "https://api.lorem.space/image/movie?w=200&h=280",
            liveLink: "https://api.lorem.space/image/album?w=400&h=400",
            codeClient: "https://api.lorem.space/image/album?w=400&h=400",
            codeServer: "https://api.lorem.space/image/album?w=400&h=400",
        },
        {
            _id: 3,
            projName: "Mobile Mania",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam doloremque beatae hic officia sint?",
            img: "https://api.lorem.space/image/movie?w=200&h=280",
            liveLink: "https://api.lorem.space/image/album?w=400&h=400",
            codeClient: "https://api.lorem.space/image/album?w=400&h=400",
            codeServer: "https://api.lorem.space/image/album?w=400&h=400",
        },
        {
            _id: 4,
            projName: "Horizon Ltd.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam doloremque beatae hic officia sint?",
            img: "https://api.lorem.space/image/movie?w=200&h=280",
            liveLink: "https://api.lorem.space/image/album?w=400&h=400",
            codeClient: "https://api.lorem.space/image/album?w=400&h=400",
            codeServer: "https://api.lorem.space/image/album?w=400&h=400",
        },
        {
            _id: 5,
            projName: "Horizon Ltd.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam doloremque beatae hic officia sint?",
            img: "https://api.lorem.space/image/movie?w=280&h=200",
            liveLink: "https://api.lorem.space/image/album?w=400&h=400",
            codeClient: "https://api.lorem.space/image/album?w=400&h=400",
            codeServer: "https://api.lorem.space/image/album?w=400&h=400",
        }
    ]
    return (
        <div>
            <div className='flex justify-center mb-16'><h2 className='text-4xl text-black-500'>Projects</h2></div>
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
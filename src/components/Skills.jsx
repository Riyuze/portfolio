import React from 'react';
import Arduino from '../assets/skills/arduino.png';
import Bootstrap from '../assets/skills/bootstrap.png';
import CPlusPlus from '../assets/skills/cplusplus.png';
import CSS from '../assets/skills/css.png';
import Django from '../assets/skills/django.png';
import Git from '../assets/skills/git.png';
import Heroku from '../assets/skills/heroku.png';
import HTML from '../assets/skills/html.png';
import Javascript from '../assets/skills/javascript.png';
import Python from '../assets/skills/python.png';
import ReactLogo from '../assets/skills/react.png';
import SQL from '../assets/skills/sql.png';
import Tailwind from '../assets/skills/tailwind.png';
import Tensorflow from '../assets/skills/tensorflow.png';


const Skills = () => {

    const skills = [
        {
            id: 1, src: Python, title: 'Python', style: 'shadow-yellow-700'
        },
        {
            id: 2, src: HTML, title: 'HTML', style: 'shadow-orange-400'
        },
        {
            id: 3, src: Javascript, title: 'Javascript', style: 'shadow-yellow-500'
        },
        {
            id: 4, src: CSS, title: 'CSS', style: 'shadow-blue-500'
        },
        {
            id: 5, src: Django, title: 'Django', style: 'shadow-green-700'
        },
        {
            id: 6, src: Git, title: 'Git', style: 'shadow-orange-700'
        },
        {
            id: 7, src: Heroku, title: 'Heroku', style: 'shadow-purple-400'
        },
        {
            id: 8, src: Bootstrap, title: 'Bootstrap', style: 'shadow-purple-700'
        },
        {
            id: 9, src: ReactLogo, title: 'React', style: 'shadow-blue-300'
        },
        {
            id: 10, src: Tailwind, title: 'Tailwind', style: 'shadow-sky-400'
        },
        {
            id: 11, src: CPlusPlus, title: 'CPlusPlus', style: 'shadow-red-700'
        },
        {
            id: 12, src: Tensorflow, title: 'Tensorflow', style: 'shadow-orange-700'
        },
        {
            id: 13, src: SQL, title: 'SQL', style: 'shadow-white'
        },
        {
            id: 14, src: Arduino, title: 'Arduino', style: 'shadow-cyan-500'
        },
    ]

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {skills.map(({id, src, title, style}) => (

                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                    <img src={src} alt='' className='w-20 mx-auto'></img>
                    <p className='mt-4'>{title}</p>
                </div>

                ))}

            </div>

        </div>
    </div>
  );
};

export default Skills
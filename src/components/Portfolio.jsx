import React from 'react';
import MushroomClassification from '../assets/portfolio/MushroomClassification.gif';
import ManeTorakka from '../assets/portfolio/ManeTorakka.gif';
import Kinoko from '../assets/portfolio/Kinoko.gif';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1, title: 'Mushroom Classification', src: MushroomClassification, demo:'https://nbviewer.org/github/Riyuze/mushroom-classification/blob/main/MushroomClassification%28ResNet50%29.ipynb', code: 'https://github.com/Riyuze/mushroom-classification'
    },
    {
      id: 2, title: 'ManeTorakka', src: ManeTorakka, demo:'https://manetorakka.herokuapp.com/', code: 'https://github.com/Riyuze/mane-torakka'
    },
    {
      id: 3, title: 'Kinoko', src: Kinoko, demo: 'https://riyuze.github.io/kinoko/', code: 'https://github.com/Riyuze/kinoko'
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({id, title, src, demo, code}) => (

          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            
            <span className='flex items-center justify-center text-xl font-bold'>{title}</span>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>

            <div className='flex items-center justify-center'>

              <a href={demo}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
              <a href={code}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>

            </div>

          </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default Portfolio
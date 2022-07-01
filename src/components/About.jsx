import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
          <p className='text-xl mt-20'>
            Henlo! I'm Kevin Tandavo, an ordinary guy trying to be a better version of himself everyday. Right now, I'm in
            the midst of learning more about the programming world, learning new languages and syntax by tackling 
            on new projects. Being an electrical engineering student, I didn't get to attend a lot of programming courses.
            This led to me learning most of the things I know today by myself, as it turns out, I fell in love with learning.
          </p>
          <br></br>
          <p className='text-xl'>
            <b>"A journey of a thousand miles begins with a single step."</b> is a quote I live by.
            I truly believe learning is a lifelong process, getting up everyday and trying to be the best version of yourself
            is something we all need to do. Sure, giving it your all for just a day will not instantly produce results, 
            but start doing it consistently and the result will come to you.
          </p>
      </div>
    </div>
  )
}

export default About
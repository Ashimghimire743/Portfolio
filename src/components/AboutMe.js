import React from 'react';

const AboutMe = () => {
  return (
    <div className="pt-8 bg-stone-200  flex flex-col items-center bg-gray-100 py-44">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">About Me</h1>
          <p className="text-xl text-gray-700 leading-relaxed text-justify pl-12">
          <span className="font-bold text-2xl text-red-500 ">Hi There!</span> 
          <div className='font-semibold text-black text-2xl flex flex-col gap-1 '>
          <div> I am a frontend developer based in Kathmandu,</div>
          <div> with a deep passion for creating intuitive and </div>       
          <div> dynamic user interfaces. My journey  into web </div>  
          <div> development started in 2023, and since then</div>
          <div> I have honed my skills in HTML, CSS, JavaScript</div>
          <div> and React.</div>
          </div>
        </p>
      </div>
   
  );
};

export default AboutMe;

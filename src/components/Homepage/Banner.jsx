import React from 'react';

const Banner = () => {
  return (
   <div className='container mx-auto'>
             <div className="carousel w-full mt-12">
      {banners.map((banner, index) => (
        <div 
          key={index}
          id={`slide${index + 1}`} 
          className="carousel-item relative w-full h-screen"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-full flex items-center pl-36">
            <div className='space-y-6'>
            <h1 className="text-4xl text-white font-bold">{banner.title}</h1>
            <p className="text-white mt-4">{banner.description}</p>
            <button className='btn btn-primary mr-4'>Discovery more</button>
            <button className='btn btn-outline btn-primary '>Latest projects</button>
            </div>
          </div>
          <div className="absolute  flex transform bottom-12 right-12 justify-between">
            <a href={banner.prev} className="btn btn-circle mr-6">❮</a>
            <a href={banner.next} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4"
  },
  {
    title: "Quality Parts for All Vehicles",
    description: "Explore the best quality car parts at affordable prices.",
    next: "#slide3",
    prev: "#slide1"
  },
  {
    title: "Expert Technicians",
    description: "Get your car serviced by highly experienced technicians.",
    next: "#slide4",
    prev: "#slide2"
  },
  {
    title: "Fast and Reliable Service",
    description: "We ensure quick and reliable services with guaranteed satisfaction.",
    next: "#slide1",
    prev: "#slide3"
  }
];

export default Banner;

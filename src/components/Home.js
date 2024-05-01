import React from 'react'
// import Logo from "../assets/logo.jpg";
import Sb from "../assets/sb.jpg";
// import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"
import Image5 from "../assets/image5.jpg"
import Image6 from "../assets/image6.jpg"


export const Home = () => {

  const images= [
    // Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,

  ];

  return (
    <section
    
    className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
  >
   
   <section>
    <div className="flex flex-col justify-center text-center items-center h-3/4">
      <h1 className="text-black text-2xl font-semibold ">Welcome to Sammy's Art Gallery</h1>
      <h2 className="md:text-5xl text-3xl text-black font-semibold py-5 font-style: italic">
        The home of creativity
      </h2>
      {/* <div className="text-xl">
       
      </div> */}
</div>
</section>

<section>
      <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={Sb} alt="Card" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Sammy Nyaundi</h2>
        <p className="text-gray-700 text-base">Hello there, I am Sammy a Kenyan Artist from Nairobi. Welcome to the home of my designs.</p>
      </div>
    </div>
</section>

<br />
<br />
<br />
<br />
<br />

<section>
    <div className="flex justify-center items-center">
      <p className="text-center text-lg">
      Hi  I’m Sb
      <br />
Art has always been the driving force behind his actions. Sb is an artist from Nairobi , Sb is a burgeoning abstract artist known for his emotive and expressive creations. He discovered painting as an alternate means of expression allowing him to express emotions differently and appeal to other senses. Sb’s artistic journey took shape while still at the primary level by randomly sketching hand drawing, he explored various mediums and techniques. Drawn to abstraction, Sb found freedom in expressing complex emotions and inner experiences through non-representational forms.
Current work;
Continuously pushing the boundaries of his craft, Sb remains committed to exploring new techniques and concepts. His upcoming series promises to delve deeper into themes of interconnectedness and the fleeting nature of human experience. Influenced by pioneers of abstract expressionism and contemporary artists pushing boundaries in the art world, Sb’s style is evolving, marked by experimentation and a fearless approach to pushing the limits of conventional art forms.
      </p>
    </div>
    </section>

    <br />
    <br />
    <br />
    <br />

    <section>
    <div className="flex justify-center items-center">
    <h1 className='text-3xl font-semibold'>
    Here is some of my work
    </h1>
      {images.map((image, index) => (
        <div key={index} className="m-2">
          <img src={image} alt={`Image ${index + 1}`} className="max-w-xs" />
        </div>
      ))}
    </div>
    </section>
    
    

  </section>
    )
}



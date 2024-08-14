// import React from 'react';
import { useEffect, useState } from "react"
import Services from './Services';
import Testimonials from './Testimonials';
// import testimonia from "../public/public/testimonia.json";


const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];

const About = () => {
  const [testimnial , setTestimnial]=useState([]);
  useEffect(()=>{
    fetch('testimonia.json').then(res => res.json()).then(data =>{
    console.log(data)
    setTestimnial(data)
  });
},[])
  return (
    // <article className="about  active">
    <article className="about  active" data-page="about">
      <header  className="h2 article-title">About me</header>
      <section className="about-text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste provident, porro esse in cupiditate nam voluptatum, dolor unde distinctio sapiente placeat quaerat! Deleniti corporis maiores possimus magni. Voluptatum, tempore?</p>
     
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, veniam maxime aut magnam similique temporibus, repellat eos ducimus voluptas harum quod nemo, totam inventore iusto blanditiis dolor ipsa mollitia sed!</p> </section>
   <section className="service">
    <h1 className="h3 service-title">What i am doing</h1>
  <ul className="service-list"> 
   {servicesData.map((mservices,index) => (
        <Services 
        key={index}
        icon={mservices.icon}
        title={mservices.title}
        description={mservices.description}
        />
      ))}
      </ul>
        </section>
       <section className="testimonials">

       <h3 className="h3 testimonials-title">Testimonials</h3>

       <ul className="testimonials-list has-scrollbar">

       {testimnial.map((testimnial, index) => (
         <Testimonials
         key={index}
         name={testimnial.name}
         avatar={testimnial.avatar}
         testimonial={testimnial.testimonial}
         />
        ))}

       </ul>

     </section>
     <section className="clients">
      <div>
        <h1 className="h3 clients-title">Clients</h1>
      </div>
      <ul className="clients-list has-scrollbar"><li>
      <a href="#"></a>
      <img src="./images/logo-1-color.png" alt="" />
      </li><li>
      <a href="#"></a>
      <img src="./images/logo-2-color.png" alt="" />
      </li><li>
      <a href="#"></a>
      <img src="./images/logo-3-color.png" alt="" />
      </li><li>
      <a href="#"></a>
      <img src="./images/logo-4-color.png" alt="" />
      </li><li>
      <a href="#"></a>
      <img src="./images/logo-5-color.png" alt="" />
      </li><li>
      <a href="#"></a>
      <img src="./images/logo-6-color.png" alt="" />
      </li>
       
        </ul>
     </section>
    </article>
  )
}

export default About
/* eslint-disable react/no-unescaped-entities */

{/*  */}
{/* <section className="testimonials">
{/*  */}
 {/* <h3 className="h3 testimonials-title" >Testimonials</h3> */}
 {/*  */}
 {/* <ul className="testimonials-list" > */}
   {/* <li>WHY</li> */}
 {/* {testimnial.map((testimnial, index) => ( */}
   {/* <Testimonials */}
 {/* key={index} */}
 {/* name={testimnial.name} */}
 {/* avatar={testimnial.avatar} */}
 {/* testimonial={testimnial.testimonial} */}

 {/* />)) */}

{/* }</ul> */}
{/* </section> */} 
// import { useEffect, useState } from "react"
// import Testimonials from "./Testimonials";
//  import Service from "./Service";
// import Services from "./Services";

// const servicesData = [
//   {
//     icon: "/images/icon-design.svg",
//     title: "Web design",
//     description: "The most modern and high-quality design made at a professional level."
//   },
//   {
//     icon: "/images/icon-dev.svg",
//     title: "Web development",
//     description: "High-quality development of sites at the professional level."
//   },
//   {
//     icon: "/images/icon-app.svg",
//     title: "Mobile apps",
//     description: "Professional development of applications for iOS and Android."
//   },
//   {
//     icon: "/images/icon-photo.svg",
//     title: "Photography",
//     description: "I make high-quality photos of any category at a professional level."
//   }
// ];


// const About = () => {
//   const [testimonials , setTestimonials ] = useState([]);
//   useEffect(()=> {
//     fetch('testimonials.json').then(res => res.json()).then(data => {
//       console.log(data)
//       setTestimonials(data)
//     });
//   }, [])
//   return (
//     <article className="about  active" data-page="about">

//     <header>
//       <h2 className="h2 article-title">About me</h2>
//     </header>

//     <section className="about-text">
//       <p>
//         I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
//         I enjoy
//         turning complex problems into simple, beautiful and intuitive designs.
//       </p>

//       <p>
//         My job is to build your website so that it is functional and user-friendly but at the same time attractive.
//         Moreover, I
//         add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
//         across your
//         message and identity in the most creative way. I created web design for many famous brand companies.
//       </p>
//     </section>


//     {/* <!--
//       - service
//     --> */}

//     <section className="service">

//       <h3 className="h3 service-title">What i'm doing</h3>

//       <ul className="service-list">
// {/* yahain myservice ek variable ha jis kay zeriya ham nay uper define services ko destructure kia ha,es ka name koi bi ho sakta ha sirf es name ko jis cheas ko access kerna ho os kay sath likh dytay hain */}
//       {servicesData.map((myservice,index) => (
//             <Services
//               key={index}
//               icon={myservice.icon}
//               title={myservice.title}
//               description={myservice.description}
//             />
//           ))}
//       </ul>
//     </section>
//     {/* <!--
//       - testimonials
//     --> */}

//     <section className="testimonials">

//       <h3 className="h3 testimonials-title">Testimonials</h3>

//       <ul className="testimonials-list has-scrollbar">

//       {testimonials.map((testimonial, index) => (
//             <Testimonials
//               key={index}
//               name={testimonial.name}
//               avatar={testimonial.avatar}
//               testimonial={testimonial.testimonial}
//             />
//           ))}

//       </ul>

//     </section>


    {/* <!--
      - clients
    --> */}

    {/* <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section> */}

//   </article>
//   )
// }

// export default About
// // components/ServicesSlider.js

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules"; // Correct import path
// import "swiper/css";
// import "swiper/css/pagination";

// const services = [
//   {
//     title: "Mobile App Development",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//     icon: "📱",
//   },
//   {
//     title: "Web Design & Development",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//     icon: "💻",
//   },
//   {
//     title: "Software Testing Service",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//     icon: "🧪",
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//     icon: "🎨",
//   },
// ];

// const ServicesSlider = () => {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Services We Offer
//         </h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination, Autoplay]} // Add the modules correctly here
//           className="mySwiper"
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
//                 <div className="text-6xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// // export default ServicesSlider;
// import React from "react";
// import Image from "next/image"; // For optimized image handling in Next.js
// import Slider from "react-slick";

// export default function Services() {
//   const services = [
//     {
//       title: "UI/UX Design",
//       description:
//         "UI/UX design focuses on creating intuitive and engaging user experiences. A well-designed interface attracts users and keeps them engaged, leading to higher satisfaction.",
//       icon: "/icons/ui-ux-icon.svg",
//       backgroundColor: "#EBF3FE",
//     },
//     {
//       title: "Software Testing Service",
//       description:
//         "Software testing services ensure the quality and functionality of your applications. They identify bugs and issues before deployment, enhancing user satisfaction. Comprehensive testing improves reliability and performance.",
//       icon: "/icons/web-dev-icon.svg",
//       backgroundColor: "#FFF6E6",
//     },
//     {
//       title: "Web Design & Development",
//       description:
//         "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//       icon: "/icons/mobile-app-icon.svg",
//       backgroundColor: "#F5E9FB",
//     },
//     {
//       title: "Cybersecurity",
//       description:
//         "Cybersecurity is essential for protecting your digital assets from threats and breaches. It builds trust with users by ensuring their data is secure.",
//       icon: "/icons/mobile-app-icon.svg",
//       backgroundColor: "#F5E9FB",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
//           Services We Offer
//         </h2>
//         <Slider {...settings}>
//           {services.map((service, index) => (
//             <div key={index} className="px-2">
//               <div
//                 className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between"
//                 style={{ backgroundColor: service.backgroundColor }}
//               >
//                 <div className="mb-4">
//                   <Image
//                     src={service.icon}
//                     alt={service.title}
//                     width={50}
//                     height={50}
//                     className="mb-3"
//                   />
//                   <h5 className="text-xl font-semibold mb-2">
//                     {service.title}
//                   </h5>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

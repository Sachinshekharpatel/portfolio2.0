import React, { useEffect } from "react";
import image3D from "../images/3dimage.png";
import image2D from "../images/2image.png";
import webdeveloper from "../images/webdeveloper.png";
import reactnative from "../images/reactnative.png";
import dcathelonepng from "../images/dcathelonepng.png";
import carrentalpng from "../images/carrentalpng.png";
import sachinstepspng from "../images/sachinstepspng.png";
import utubepng from "../images/utubepng.png";
const MiddlePage = () => {
  return (
    <div className="mt-[80px]  cursor-default  justify-center items-center">
      <div className="px-[40px] cursor-default pt-[40px] flex text-3xl md:text-5xl">
        <h1 className="flex font-extrabold text-white">Hi<h1 className="mr-2">👋🏻,</h1> I'm</h1>
        <h1 className="text-[#915EFF] ml-3 font-extrabold">
          Sachin Shekhar Patel
        </h1>
      </div>
      <h1 className="px-[40px] pb-[30px] text-[#FFFFFF] font-semibold text-xl mt-[38px]">
        I develop, user interfaces and web applications
      </h1>
      <div className="flex p-6 items-center justify-center">
        <div className="text-white">
          <h3 className="font-semibold text-gray-400 md:text-2xl">
            Introduction
          </h3>
          <h1 className="font-extrabold text-4xl my-2 ">Overview .</h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            I'm a skilled software developer with experience in JavaScript, and
            expertise in frameworks like React, Node.js, and next.js. I'm a
            quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to
            life!
          </h3>
        </div>
        <img src={image3D} className="h-[200px] " alt="3D Image" />
      </div>
      <div className="flex px-10 justify-evenly md:justify-start">
        <div className="h-[190px] md:mr-[40px] w-[200px] rounded-[20px] p-[2px] bg-gradient-to-r from-green-500 to-blue-500">
          <div className="h-full w-full bg-[#050816] rounded-[20px] flex flex-col  items-center justify-center p-6">
            <img className="h-[70px]" src={webdeveloper} alt="Web Developer" />
            <h2 className="text-[#FFFFFF] mt-4 font-extrabold text-center">
              Web Developer
            </h2>
          </div>
        </div>

        <div className="h-[190px] w-[200px] rounded-[20px] p-[2px] bg-gradient-to-r from-green-500 to-blue-500">
          <div className="h-full w-full bg-[#050816] rounded-[20px] flex flex-col items-center justify-center p-6">
            <img className="h-[70px]" src={reactnative} alt="Web Developer" />
            <h2 className="text-[#FFFFFF] mt-4 font-extrabold text-center">
              React Native Developer
            </h2>
          </div>
        </div>
      </div>
      <div className="flex p-6 items-center justify-center">
        <div className="text-white">
          <h3 className="font-semibold text-gray-400 md:text-2xl">MY WORK</h3>
          <h1 className="font-extrabold text-4xl my-2 ">Projects .</h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </h3>
        </div>
        <img src={image2D} className="h-[200px] " alt="3D Image" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-6 items-center justify-center">
        <div className=" px-4 py-3  rounded-[20px] p-[2px] bg-gradient-to-r from-teal-950  to-black-100">
          <a target="_blank" href="https://dcathelonemart.netlify.app/">
            <img
              src={dcathelonepng}
              className="h-[200px} cursor-pointer rounded-2xl"
            ></img>
          </a>
          <h1 className="font-extrabold text-[#FFFFFF] text-3xl my-2 ">
            Dcathelone ecommerce .
          </h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            Dcathelonemart is a responsive web application developed using React
            and tailwind, offering users the ability to create accounts, log in,
            and user can buy products. Users can delete and add products to the
            cart as well as for wishlist and proceed to checkout with razorpay
            payment gateway, our cart count dynamically adjusting accordingly.
          </h3>
          <div className="flex">
            <h1 className="text-blue-400 mt-3 md:text-2xl font-serif">
              #react
            </h1>
            <h1 className="text-red-400 ml-3 mt-3 md:text-2xl font-serif">
              #tailwind
            </h1>

            <h1 className="text-gray-400 ml-3 mt-3 md:text-2xl font-serif">
              #paymentgateway
            </h1>
          </div>
          <div className=" mt-2 flex">
            <a
              href="https://github.com/Sachinshekharpatel/dcathelone"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="3em"
              >
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://dcathelonemart.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="ml-3"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="2em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M6.879 9.934a.81.81 0 01-.575-.238 3.818 3.818 0 010-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 010 5.392l-1.371 1.371a.813.813 0 01-1.149-1.149l1.371-1.371A2.19 2.19 0 0012 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 000 3.094.813.813 0 01-.575 1.387z"
                />
                <path
                  fill="currentColor"
                  d="M4 15.813a3.789 3.789 0 01-2.696-1.117 3.818 3.818 0 010-5.392l1.371-1.371a.813.813 0 011.149 1.149l-1.371 1.371A2.19 2.19 0 004 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 000-3.094.813.813 0 011.149-1.149 3.818 3.818 0 010 5.392l-3 3A3.789 3.789 0 014 15.813z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className=" mt-[10px] md:ml-2 px-4 py-3  rounded-[20px] p-[2px] bg-gradient-to-r from-teal-950  to-black-100">
          <a target="_blank" href="https://sachincarrental.netlify.app/">
            <img
              src={carrentalpng}
              className="h-[200px} cursor-pointer rounded-2xl"
            ></img>
          </a>
          <h1 className="font-extrabold text-[#FFFFFF] text-3xl my-2 ">
            Car Rental .
          </h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            Developed a versatile web application allowing users to book cars,
            inquire via a chatbox, and seamlessly process payments through
            Razorpay. Leveraged React.js for frontend development and integrated
            responsive design principles for optimal user experience. Enhanced
            user satisfaction and engagement by providing a user-friendly
            platform .
          </h3>
          <div className="flex">
            <h1 className="text-blue-400 mt-3 md:text-2xl font-serif">
              #react
            </h1>
            <h1 className="text-red-400 ml-3 mt-3 md:text-2xl font-serif">
              #firebase
            </h1>
            <h1 className="text-[#A95F8F] ml-3 mt-3 md:text-2xl font-serif">
              #tailwind
            </h1>
          </div>
          <div className=" mt-2 flex">
            <a
              href="https://github.com/Sachinshekharpatel/carrentalapp2024"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="3em"
              >
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://sachincarrental.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="ml-3"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="2em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M6.879 9.934a.81.81 0 01-.575-.238 3.818 3.818 0 010-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 010 5.392l-1.371 1.371a.813.813 0 01-1.149-1.149l1.371-1.371A2.19 2.19 0 0012 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 000 3.094.813.813 0 01-.575 1.387z"
                />
                <path
                  fill="currentColor"
                  d="M4 15.813a3.789 3.789 0 01-2.696-1.117 3.818 3.818 0 010-5.392l1.371-1.371a.813.813 0 011.149 1.149l-1.371 1.371A2.19 2.19 0 004 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 000-3.094.813.813 0 011.149-1.149 3.818 3.818 0 010 5.392l-3 3A3.789 3.789 0 014 15.813z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className=" mt-[10px] md:ml-2 px-4 py-3 rounded-[20px] p-[2px] bg-gradient-to-r from-teal-950  to-black-100">
          <a target="_blank" href="https://sachinsteps.netlify.app/welcomepage">
            <img
              src={sachinstepspng}
              className="h-[200px} cursor-pointer rounded-2xl"
            ></img>
          </a>
          <h1 className="font-extrabold text-[#FFFFFF] text-3xl my-2 ">
            Expense tracker .
          </h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            I developed a comprehensive expense tracker app integrated with
            Firebase authentication, ensuring secure access for users. Each user
            enjoys a personalized experience with individual carts, enhancing
            organization and privacy. The app simplifies expense management,
            offering a seamless and efficient solution for tracking financial
            activities.
          </h3>
          <div className="flex">
            <h1 className="text-white mt-3 md:text-2xl font-serif">
              #Bootstrap
            </h1>
            <h1 className="text-red-400 ml-3 mt-3 md:text-2xl font-serif">
              #Redux
            </h1>
            <h1 className="text-[#A95F8F] ml-3 mt-3 md:text-2xl font-serif">
              #Firebase
            </h1>
          </div>
          <div className=" mt-2 flex">
            <a
              href="https://github.com/Sachinshekharpatel/trackerappreactbootstrap"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="3em"
              >
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://sachinsteps.netlify.app/welcomepage"
              target="_blank"
              rel="noreferrer"
              className="ml-3"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="2em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M6.879 9.934a.81.81 0 01-.575-.238 3.818 3.818 0 010-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 010 5.392l-1.371 1.371a.813.813 0 01-1.149-1.149l1.371-1.371A2.19 2.19 0 0012 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 000 3.094.813.813 0 01-.575 1.387z"
                />
                <path
                  fill="currentColor"
                  d="M4 15.813a3.789 3.789 0 01-2.696-1.117 3.818 3.818 0 010-5.392l1.371-1.371a.813.813 0 011.149 1.149l-1.371 1.371A2.19 2.19 0 004 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 000-3.094.813.813 0 011.149-1.149 3.818 3.818 0 010 5.392l-3 3A3.789 3.789 0 014 15.813z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className=" mt-[10px] md:ml-2 px-4 py-3 rounded-[20px] p-[2px] bg-gradient-to-r from-teal-950  to-black-100">
          <a target="_blank" href="https://sachinsteps.netlify.app/welcomepage">
            <img
              src={utubepng}
              className="h-[200px} cursor-pointer rounded-2xl"
            ></img>
          </a>
          <h1 className="font-extrabold text-[#FFFFFF] text-3xl my-2 ">
            Videostreaming App .
          </h1>
          <h3 className="text-gray-400 mt-3 md:text-2xl font-serif">
            Developed a fully functional video streaming website using React,
            Bootstrap, and Redux, with authentication features allowing users to
            create accounts and log in. Implemented state management with Redux
            for seamless navigation, video playback. Bootstrap Javascript React
            Context API Firebase Auth
          </h3>
          <div className="flex">
            <h1 className="text-blue-400 mt-3 md:text-2xl font-serif">
              #Bootstrap
            </h1>
            <h1 className="text-green-400 ml-3 mt-3 md:text-2xl font-serif">
              #contextapi
            </h1>
            <h1 className="text-[#A95F8F] ml-3 mt-3 md:text-2xl font-serif">
              #authentication
            </h1>
          </div>
          <div className=" mt-2 flex">
            <a
              href="https://github.com/Sachinshekharpatel/yoututbereact2024"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="3em"
              >
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://sachintube.vercel.app/loginpage"
              target="_blank"
              rel="noreferrer"
              className="ml-3"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="2em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M6.879 9.934a.81.81 0 01-.575-.238 3.818 3.818 0 010-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 010 5.392l-1.371 1.371a.813.813 0 01-1.149-1.149l1.371-1.371A2.19 2.19 0 0012 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 000 3.094.813.813 0 01-.575 1.387z"
                />
                <path
                  fill="currentColor"
                  d="M4 15.813a3.789 3.789 0 01-2.696-1.117 3.818 3.818 0 010-5.392l1.371-1.371a.813.813 0 011.149 1.149l-1.371 1.371A2.19 2.19 0 004 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 000-3.094.813.813 0 011.149-1.149 3.818 3.818 0 010 5.392l-3 3A3.789 3.789 0 014 15.813z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-[10px] md:ml-2 px-4 py-3 rounded-[20px] p-[2px] bg-gradient-to-r from-[#231a37] to-black-100">
        <h1 className="font-extrabold text-[#FFFFFF] text-3xl my-2 text-center justify-center ">
          SKILLS
        </h1>

        <div className="flex justify-center text-center">
          <h1 className="text-blue-400 mt-3 md:text-xl font-serif">
            #React
          </h1>
          <h1 className="text-green-400 mt-3 ml-3  md:text-xl font-serif">#MongoDB</h1>

          <h1 className="text-[#ce6e2e] ml-3 mt-3 md:text-xl font-serif">
            #Firebase
          </h1>
        </div>
        <div className="flex justify-center text-center">
          <h1 className="text-red-400 mt-3 md:text-xl font-serif">#HTML</h1>
          <h1 className="ml-3 mt-3 text-yellow-100 md:text-xl font-serif">
            #Redux
          </h1>
          <h1 className="text-[#624156] ml-3 mt-3 md:text-xl font-serif">
            #Tailwind
          </h1>
        </div>
        <div className="flex justify-center text-center">
          <h1 className="text-yellow-400 mt-3 md:text-xl font-serif">
            #Javascript
          </h1>
          <h1 className="text-green-400 ml-3 mt-3 md:text-xl font-serif">
            #MaterialUI
          </h1>
          <h1 className="text-[#A95F8F] ml-3 mt-3 md:text-xl font-serif">
            #CSS
          </h1>
        </div>
        <div className="flex justify-center text-center">
          <h1 className="text-blue-700 mt-3 md:text-xl mr-2 font-serif">#Bootstrap</h1>
          <h1 className="text-red-300 mt-3 md:text-xl font-serif">#Next.js</h1>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;

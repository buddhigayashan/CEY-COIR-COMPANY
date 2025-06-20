import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import {FaCameraRetro} from 'react-icons/fa';
import {GiNotebook} from 'react-icons/gi';
import {SlNote} from 'react-icons/sl';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const NavLinks = [
  {
    id: "1",
    name: "SignIn",
    link: "/signin",
  },
  {
    id: "2",
    name: "SignUp",
    link: "/signup",
  },
];

const skillsData = [
  {
    name: "Coco Peat Grow Bags",
    image: "https://nbcoir.com/images/briquette1.jpg",
    description: "Coco Peat Briquettes come in small sizes and varying weights, including 650g, 500g, 315g, and 250g.",
    aosDelay: "0",
  },
  {
    name: "Coco Coir Discs",
    image: "https://nbcoir.com/images/coco-peat-discs1.webp",
    description: "CeyCoir is proud to offer a premium range of coco coir discs, specially designed to meet the needs of seed starting, cloning, and plant propagation enthusiasts.",
    aosDelay: "500",
  },
  {
    name: "Mix Fiber Bales",
    image: "https://nbcoir.com/images/fiber-bales.webp",
    description: "We are dedicated to providing superior quality mix fiber bales and coco coir products tailored to meet the diverse needs of our customers.",
    aosDelay: "1000",
  },
];

const Home = () => {
  // Dark mode state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="duration-300 bg-green-100 dark:bg-black dark:text-white">
      {/* Navbar */}
      <nav className="shadow-[0_4px_15px_rgba(0,0,0,0.4)] bg-gray-900 text-white dark:bg-gray-950">
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Left Side: Logo */}
          <div>
            <h1 className="font-serif text-3xl font-bold">CeyCoir</h1>
          </div>

          {/* Right Side: SignIn, SignUp, and Sun/Moon Icon */}
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NavLinks.map((link) => (
                <li key={link.id} className="py-2">
                  <Link
                    to={link.link}
                    className="px-5 py-2 text-lg font-medium text-green-400 transition-all duration-300 border border-green-400 rounded-lg hover:bg-green-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Icon */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl text-gray-300 transition-colors duration-300 cursor-pointer hover:text-yellow-400"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl text-gray-300 transition-colors duration-300 cursor-pointer hover:text-yellow-400"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
     {/* Hero Section */}
<div
  className={`w-full min-h-screen flex items-center justify-center transition-colors duration-500 ${
    theme === "light" ? "bg-white" : "bg-black"
  }`}
>
  <div className="grid w-full grid-cols-1 gap-10 px-6 mx-auto max-w-7xl place-items-center sm:grid-cols-2">
    {/* Image */}
    <div
      className="flex items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <img
        src="https://i.postimg.cc/vm0BXtF4/image.png"
        alt="Coco Peat Manufacturer"
        className="w-full max-w-xl transition-transform duration-500 border-4 border-green-600 shadow-2xl rounded-3xl hover:scale-105"
      />
    </div>

    {/* Text Content */}
    <div
      className="flex flex-col justify-center text-center sm:text-left"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <h1 className="font-serif text-green-800 dark:text-green-600 text-1xl">
        <span className="block font-semibold lg:text-7xl text-1xl">
        Welcome To CeyCoir
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
        CeyCoir, established in 2006, has proudly led the industry as a
        premier manufacturer and exporter of premium coco peat and coco
        coir bricks worldwide for over a decade.
      </p>
    </div>
  </div>
</div>


      {/* Second Section */}
<div className="flex items-center justify-center min-h-screen px-4">
  <div className="flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
    
    {/* Image Section */}
    <div className="rounded-lg shadow-lg ">
      <img
        src="https://i.postimg.cc/jjXFbmfM/image.png"
        alt="Coco Peat Manufacturer"
        className="h-auto rounded-lg w-96"
        data-aos="fade-up"
        data-aos-duration="1200"
      />
    </div>

    {/* Text Content */}
    <div data-aos="fade-left" data-aos-duration="1200">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 md:text-5xl">
        Coco Peat Manufacturer
      </h1>
      <p className="max-w-lg mt-4 text-lg text-gray-800 dark:text-gray-300">
      We are registered exporting company based and operated from Sri Lanka.
      Our global reach extends to key regions, including Australia, New Zealand,
      Dubai & the Gulf area, Russia, and Finland, thanks to our dedicated representatives.
      Join our community of satisfied customers and discover the excellence of NB Coir today.
      </p>
    </div>
  </div>
</div>


<div className="py-14 bg-white dark:bg-white dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
  <div className="container px-6 mx-auto">
    <div className="pb-12 text-center">
      <h1 className="font-serif text-4xl font-bold text-green-700 dark:text-green-400">
        Our Products
      </h1>
    </div>
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={skill.aosDelay}
          className="p-6 overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg dark:bg-black hover:scale-105"
        >
          <div className="flex justify-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="object-cover w-full h-48 rounded-md"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-600">
              {skill.name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-white">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<footer className="py-10 mt-10 text-white bg-gray-900 dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold text-green-400">CeyCoir</h1>
            <p className="mt-2 text-gray-400">
              Premium Coco Peat & Coir Products Manufacturer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-green-300">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-green-400">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-green-400">About</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-green-400">Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-green-300">Follow Us</h2>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-4 mt-6 text-center text-gray-400 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} CeyCoir. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
</div>
  );
};

export default Home;

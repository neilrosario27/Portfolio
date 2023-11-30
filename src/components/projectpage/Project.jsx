import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Weather App",
    img: "https://img.freepik.com/free-vector/weather-concept-illustration_114360-1234.jpg?w=740&t=st=1701358632~exp=1701359232~hmac=df8cacc0cdba74728823981bb03f920b1ebfa5e75bd6ab6442b19b28a67ebb98",
    desc: "Developed a responsive Weather App using React.js, featuring real-time weather data fetched from external APIs, providing users with accurate and up-to-date weather information for their selected locations.",
    link: "https://github.com/neilrosario27/Weather_App",
  },
  {
    id: 2,
    title: "Stock Price Predictor",
    img: "https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg?w=740&t=st=1701358759~exp=1701359359~hmac=46803a3e4e5852a65f47061aeb38448da8cdccf9ee47f180ce425337d521c702",
    desc: "Implemented a Stock Price Predictor using neural networks and TensorFlow, leveraging machine learning to analyze historical stock data and predict future stock prices. The model aimed to assist investors in making informed decisions based on predictive analytics.",
    link: "https://github.com/neilrosario27/Stock_Price_Predictor",
  },
  {
    id: 3,
    title: "Image Classification (MNIST)",
    img: "https://img.freepik.com/premium-vector/brain-logo-template_15146-27.jpg?w=740",
    desc: "Created an MNIST Classification project without relying on external libraries, demonstrating a strong understanding of image classification techniques and neural networks to accurately classify handwritten digits in the MNIST dataset.",
    link: "https://github.com/neilrosario27/MNIST_NN",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  var x = 0;
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleClick(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" /*ref={ref}*/>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

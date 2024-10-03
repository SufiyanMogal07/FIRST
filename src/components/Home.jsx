import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home-2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home-3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            At TechyStar, we're driven by a deep passion for technology and
            education. We believe that every child, regardless of background,
            should have the opportunity to explore the world of tech, unleash
            their creativity, and develop the skills necessary for a future
            defined by innovation. Our team brings together professionals from
            diverse fields, all united by a shared vision: to bridge the gap
            between technology and education. We provide children with engaging,
            hands-on experiences in coding, robotics, and digital creativity,
            designed to cultivate critical thinking and a problem-solving
            mindset. Through our workshops, mentorship programs, and resources,
            we empower the next generation to be confident in their abilities
            and ready to take on the challenges of tomorrow;s digital landscape.
          </p>
        </div>
      </div>
      <div className="home-4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;

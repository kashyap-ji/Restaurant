import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to our restaurant! We are dedicated to providing our customers
        with a delightful dining experience. Our restaurant specializes in
        ramen. We source the freshest ingredients and prepare each dish with care to ensure exceptional taste
        and quality. At Foodhub, we believe in creating a warm and
        inviting atmosphere for our guests. Whether you're dining with family,
        friends, or colleagues, we strive to make every visit memorable. Our
        team is passionate about food and hospitality. From our talented chefs
        to our friendly servers, everyone here is committed to exceeding your
        expectations. Thank you for choosing Foodhub. We look forward
        to serving you soon!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
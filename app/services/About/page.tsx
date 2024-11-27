import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-16">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-4xl lg:text-5xl">About Us</h1>
      
      <p className="mb-4 text-base leading-relaxed text-justify md:text-lg lg:text-xl">
        Welcome to our company, where we are dedicated to making life easier for the people of Rajahmundry by providing instant and hassle-free services. We understand the value of time, and our goal is to offer reliable, efficient, and user-friendly solutions that cater to your everyday needs. Whether you require assistance with skilled work, daily tasks, or specialized services, we are here to connect you with the right professionals quickly and effortlessly. Our commitment is to ensure that each client enjoys a seamless experience with minimal effort, allowing them to focus on what truly matters.
      </p>
      
      <p className="text-base leading-relaxed text-justify md:text-lg lg:text-xl">
        In addition to serving our clients, we are also passionate about creating opportunities for talented individuals. We believe that everyone with a great skill set deserves a platform to showcase their abilities and earn a meaningful income. That's why we offer an exciting opportunity for freelancers, skilled workers, and those with unique talents to join our growing community. By registering on the "Partner With Us" section of our website, you open doors to a world of possibilities where you can connect with potential clients, grow your business, and achieve financial independence. Whether you're a seasoned professional or just starting out, our platform is designed to help you thrive by offering you visibility, support, and the opportunity to be part of a thriving network.
      </p>
    </div>
  );
};

export default About;

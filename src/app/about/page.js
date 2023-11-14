import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <main className="container mx-auto py-8">
        <h2 className="text-black text-3xl font-bold mb-4 text-center">
          About Us
        </h2>
        <div className="text-center text-black">
          <p className="mb-6 start-aligned">
            Welcome to <span className="font-bold">Radar Softwares</span>! We
            stand as a premier distributor and consultancy firm, specializing in
            cutting-edge ICT infrastructure technologies and products in India.
            Our core mission is to deliver the latest and most efficient
            technologies to enterprises, offering high-quality solutions and
            ensuring a significant return on investment.
          </p>
          <p className="mb-6 start-aligned">
            At Radar Softwares, we grasp the critical importance of staying
            ahead in the dynamic realm of Information &amp; Communication
            Technology (ICT) Infrastructure. To this end, we provide a spectrum
            of innovative solutions and products that not only contribute to the
            green movement but also address the evolving needs of businesses.
          </p>
          <p className="mb-6 start-aligned">
            With a rich experience of{" "}
            <span className="font-bold">four years</span> in the industry, our
            expertise lies in network security and network management. We
            provide consultancy services and products that safeguard, manage,
            and interconnect an organizations most valuable asset - information.
            Through our technically superior yet user-friendly products, we
            endeavor to deliver comprehensive protection and meet the advanced
            demands of our esteemed customers.
          </p>

          <p className="mb-4 start-aligned">
            Join us in securing your assets and embracing the future of
            technology. Contact us today to explore more about our solutions and
            discover how we can empower your business to thrive.
          </p>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 w-full">
        <div className="container mx-auto text-center text-black">
          &copy; 2022 Radar Softwares. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

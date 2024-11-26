import React from 'react';

const Cctv: React.FC = () => {
  const icons = [
    {
      id: 1,
      src: '/surveillance-camera.png',
      text: 'Purchase&Installation',
      link: "https://wa.me/919652575313?text=hello, i Need New CCtv Security System With Equipment & Installation",
    },
    {
      id: 2,
      src: '/camera.png',
      text: 'Installation Only',
      link: "https://wa.me/919652575313?text=hello,I have Cc Cameras With All Equipment,Can You Install.",
    },
    {
      id: 3,
      src: '/sa-app-dev/app/public/maintenance.png',
      text: 'Repair/Service',
      link: "https://wa.me/919652575313?text=hello,I have Problem With My Cctv,Can You Repair.",
    },
    

    

  ];

  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center items-center">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="m-4 p-4 text-center rounded-lg hover:bg-gray-100 transition duration-300 w-36 sm:w-48 lg:w-60"
        >
          <img
            src={icon.src}
            alt={icon.text}
            className="w-20 h-20 mx-auto mb-2 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-gray-700 font-semibold mb-4">{icon.text}</p>
          <a
            href={icon.link}
            className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cctv;

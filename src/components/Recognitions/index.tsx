const Recognitions = () => {
  const images = [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlfGVufDB8fDB8fHww&w=1000&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#f7bd2d] p-4 font-sans sm:p-6 md:p-8">
      <div className="mb-8 flex flex-col items-center md:mb-12">
        <h1 className="mb-4 text-center text-2xl font-bold tracking-wide text-[#030d41] uppercase sm:text-3xl md:text-4xl">
          Reconocimientos
        </h1>
        <div className="h-1 w-16 bg-[#030d41] sm:w-20 md:w-24"></div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-xl bg-[#030d41] shadow-lg md:flex-row md:rounded-2xl md:shadow-xl">
        <div className="order-2 flex w-full flex-col justify-center p-6 text-[#f7bd2d] md:order-1 md:w-2/6 md:p-8 lg:p-10">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xl font-bold italic sm:text-2xl">
              Innovación que transforma:
            </p>
            <p className="text-lg sm:text-xl">
              Reconocimiento a nuestro equipo y clientes por impulsar soluciones
              tecnológicas que marcan la diferencia.
            </p>
          </div>

        </div>

        <div className="order-1 grid w-full grid-cols-2 gap-3 bg-[#f7bd2d] p-4 sm:gap-4 sm:p-5 md:order-2 md:w-4/6 md:p-6">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative h-32 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 sm:h-40 sm:rounded-xl md:h-48 lg:h-56"
            >
              <img
                src={image}
                alt={`Reconocimiento ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:mt-8 md:grid-cols-4">
        {images.slice(4, 8).map((image, index) => (
          <div
            key={index + 4}
            className="relative h-28 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 sm:h-36 sm:rounded-xl md:h-40 lg:h-44"
          >
            <img
              src={image}
              alt={`Reconocimiento ${index + 5}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognitions;

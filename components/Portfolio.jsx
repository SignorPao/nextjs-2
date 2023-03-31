import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-12 pb-24 text-center">
      <h1 className="title">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-[400px] col-span-2 md:col-span-3 row-span-2 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="portfolio img"
            fill
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="hover:scale-125 ease-in duration-300"
          />
        </div>
        <div className="w-full h-[192px] relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
            alt="portfolio img"
            fill
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="hover:scale-125 ease-in duration-300"
          />
        </div>
        <div className="w-full h-[192px] relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
            alt="portfolio img"
            fill
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="hover:scale-125 ease-in duration-300"
          />
        </div>
        <div className="w-full h-[192px] relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="portfolio img"
            fill
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="hover:scale-125 ease-in duration-300"
          />
        </div>
        <div className="w-full h-[192px] relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80"
            alt="portfolio img"
            fill
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="hover:scale-125 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import "./App.css";

function App() {
  return (
    <>
      {/* Container of all the section */}
      <main className="w-full min-h-screen max-lg:py-20 flex justify-center items-center">
        <section className="w-[80%] flex max-lg:flex-col justify-between rounded-lg ">
          {/* First section */}
          <div className="flex lg:rounded-l-lg max-lg:rounded-t-lg gap-10 flex-col bg-brightOrange w-full text-white px-8 lg:px-16 py-16 justify-center">
            <img className="w-[80px]" src="/icon-sedans.svg" alt="Sedans Icons" />
            <h1 className=" text-4xl bigshoulder uppercase">Sedans</h1>
            <p className="lexend">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip.</p>
            <a href="#" className="lexend lg:mt-12 w-1/2 bg-white rounded-full py-3 text-brightOrange text-center hover:bg-brightOrange hover:border hover:text-white  ">Learn More</a>
          </div>
          {/* Second section */}
          <div className="flex gap-10 flex-col bg-darkCyan w-full text-white px-8 lg:px-16 py-16 justify-center">
            <img className="w-[80px]" src="/icon-suvs.svg" alt="Sedans Icons" />
            <h1 className=" text-4xl bigshoulder uppercase">SUVs</h1>
            <p className="lexend">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures.</p>
            <a href="#" className="lexend lg:mt-12 w-1/2 bg-white rounded-full py-3 text-darkCyan text-center hover:bg-darkCyan hover:border hover:text-white">Learn More</a>
          </div>
          {/* Third section */}
          <div className="flex gap-10 max-lg:rounded-b-lg lg:rounded-r-lg flex-col bg-veryDarkCyan w-full text-white px-8 lg:px-16 py-16 justify-center">
            <img className="w-[80px]" src="/icon-luxury.svg" alt="Sedans Icons" />
            <h1 className=" text-4xl bigshoulder uppercase">Luxury</h1>
            <p className="lexend">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.</p>
            <a href="#" className="lexend lg:mt-12 w-1/2 bg-white rounded-full py-3 text-veryDarkCyan text-center hover:bg-veryDarkCyan hover:border hover:text-white">Learn More</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

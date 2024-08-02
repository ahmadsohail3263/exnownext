


export default function Home() {
  return (
    
    
      <div className="flex flex-grow justify-center items-center custom-bg">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C7B63]">
            Find an Expert Now
          </h2>
          <h4 className="text-lg font-bold my-4">
            Who do you want to speak to?
          </h4>
          <form>
            <div>
              <input
                className="md:min-w-[600px] rounded-lg h-12 p-2 border border-gray-300"
                placeholder="Search here . . ."
                name="search"
                id="search"
              />
              <button className="bg-[#2C7B63] py-3 px-6 mx-2 text-white font-bold rounded-lg">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      
    
  );
}

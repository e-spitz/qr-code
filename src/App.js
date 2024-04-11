function App() {
  return (
    <div className="flex justify-center items-center bg-lightgray h-screen">
      <section className="flex flex-col justify-center items-center text-center w-[20rem] m-10 sm:w-[19rem] bg-white drop-shadow-lg rounded-md">
        <div className="p-4">
          <img src="./image-qr-code.png" alt="QR Code" className="rounded-md"/>
        </div>
        <div className="font-outfit mb-6 px-2">
          <h1 className="text-[22px] font-bold text-darkblue md:drop-shadow-md mb-2">Improve your front-end skills by building projects</h1>
          <h6 className="text-[15px] font-normal text-gray">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h6>
        </div>
      </section>
    </div>
  );
}

export default App;

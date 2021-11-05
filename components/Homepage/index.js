export default function Homepage({ title }) {
  return (
    <>
      <div className="text-center mt-4 px-6 flex flex-col">
        <p className="font-barlow uppercase text-base tracking-widest text-blue-200">
          So, you want to travel to
        </p>
        <h1 className="text-7xl mt-6 tracking-wide font-bellefair">SPACE</h1>
        <p className="text-blue-200 mt-6" style={{ fontSize: 15 + "px" }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="font-bellefair mt-32 text-black bg-white flex  p-20  rounded-full self-center relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-wide">
            EXPLORE
          </span>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <div className="text-center mt-4 px-6 flex flex-col sm:mt-20 xl:mt-28 xl:flex-row xl:px-52 xl:text-left xl:items-end xl:gap-96">
        <div>
          <p className="font-barlow uppercase text-base tracking-widest text-blue-200 sm:text-xl">
            So, you want to travel to
          </p>
          <h1 className="sm:text-9xl xl:text- text-7xl mt-6 tracking-wide font-bellefair">
            SPACE
          </h1>
          <p
            className="text-blue-200 mt-6 sm:text-lg sm:px-36 xl:px-0 xl:text-xl"
            style={{ fontSize: 15 + "px" }}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href="/destination">
          <a className="font-bellefair mt-32 text-black bg-white flex  p-20 sm:p-28 xl:p-32  rounded-full self-center relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-3xl tracking-wide">
              EXPLORE
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}

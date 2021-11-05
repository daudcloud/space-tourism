import Header from "../Header";
import Image from "next/image";

export default function Layout({ title, children }) {
  return (
    <>
      <div className="bg-main min-h-screen">
        <Header title={title} />
        <header className="pl-6 pt-6 flex">
          <div className="relative w-10 h-10">
            <Image
              src="/assets/shared/logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}

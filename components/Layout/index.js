import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
    </>
  );
}

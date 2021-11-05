import Header from "../Header";

export default function Layout({ title, children }) {
  return (
    <div>
      <Header title={title} />
      <header></header>
      <main>{children}</main>
    </div>
  );
}

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="section">
        <Header />
        <Hero />
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default App;

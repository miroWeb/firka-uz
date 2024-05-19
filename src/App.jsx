import DesktopImg from "./assets/back-img.png";
import Header from "./components/Header";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${DesktopImg})` }}>
      <Header />
      <Main />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;

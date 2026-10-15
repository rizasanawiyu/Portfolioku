import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


function LoggedInComponent(){
  return(
    <div>
      <h4>Halo, Selamat Datang Kembali</h4>
    </div>
  );
}

function LoginComponent(){
  return(
    <div>
      <h4>Silahkan Login</h4>
    </div>
  );
}

function AuthComponent(props){
  const isLoggedin = props.isLoggedin
  if(isLoggedin){
    return <LoggedInComponent />
  }
  return <LoginComponent />
}

function App() {
  return (
    <>
    <AuthComponent isLoggedin={true}/>
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

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React from "react"

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
  
function ChildrenComponent(props){
  return(
    <ul>
      {React.Children.map(props.children, child =>(
        <li>{child}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <>
    <AuthComponent isLoggedin={true}/>
      <div className="section">
        <Header />
        <Hero />
      </div>
      <ChildrenComponent>
        <p>Portfolio - 1</p>
        <p>Portfolio - 2</p>
      </ChildrenComponent> 
      <Content />
      <Footer />
    </>
  );
}

export default App;

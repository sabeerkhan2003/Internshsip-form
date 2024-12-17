import logo from "./assets/Logo.png";
import './App.css';
import Form from './form';
import Globe from "./components/ui/globe"; // Adjust according to your project structure

function App() {
  return (
    <>
    <div className="flex items-center justify-center z-10 ">
          <Globe className="lg:w-[600px] lg:h-[600px] absolute top-[55%] z-10 opacity-45" />
        </div>
      <div className=' flex flex-col justify-end items-end relative z-50'>
        <img src={logo} alt="logo" className="h-20 w-56 mx-auto my-2" />
        <hr className="w-full h-3 lg:pb-8 hidden lg:block z-40" />
        <Form />
        
      </div>
    </>
  );
}

export default App;

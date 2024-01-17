import './App.css';
import './Produits.json';
import Name from './Name.js';
import Price from './Price.js';
import Description from './Description.js';
import Image from './Image.js';
const userName = "Alpha"; // Remplacez par votre nom

function App() {
  return (
    <div className="cart" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "gray"}}>
      <Name/>
      <Price/>
      <Description/>
      <Image/>
      <hr/>
      <div className="greeting-message">
        <p className='user-name' style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "20px", fontWeight: "bold"}}>{userName ? `Hello, ${userName} !`  : "Hello, there !"}</p> 
      </div>
        {userName && <img className='user-image' style={{width: "150px", height: "100px", borderRadius: "30%"}} src="https://i.pinimg.com/564x/f9/1f/dc/f91fdc3c8608b708a759f2dcb05c5e41.jpg" alt="Userprofilepic"/>}
    </div>
    //Si l'utilisateur est connecté
  );
}
export default App;
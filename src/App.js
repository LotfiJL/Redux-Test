import "./App.css";
import CakeContainer from "./Component/CakeContainer";
import HooksCakecontainer from "./Component/HooksCakecontainer";
import HooksIcecreamContainer from "./Component/HooksIce CreamContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import NewCakeContainer from "./Component/NewCakeContainer";
import ItemCoontainer from "./Component/itemCoontainer";
function App() {
  return (
    <div className="App">
      <ItemCoontainer cake />
      <CakeContainer />
      <HooksCakecontainer />
      -----------------
      <IceCreamContainer />
      <HooksIcecreamContainer />
      ----------------
      <NewCakeContainer />
    </div>
  );
}

export default App;

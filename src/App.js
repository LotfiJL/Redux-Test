import "./App.css";
import CakeContainer from "./Component/CakeContainer";
import HooksCakecontainer from "./Component/HooksCakecontainer";
import HooksIcecreamContainer from "./Component/HooksIce CreamContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import NewCakeContainer from "./Component/NewCakeContainer";
import ItemCoontainer from "./Component/itemCoontainer";
import UserContainerAsync from "./Component/userContainerAsync";
function App() {
  return (
    <div className="App">
      <ItemCoontainer cake />
      <CakeContainer IceCream />
      <HooksCakecontainer />
      -----------------
      <IceCreamContainer />
      <HooksIcecreamContainer />
      ----------------
      <NewCakeContainer />
      <UserContainerAsync />
    </div>
  );
}

export default App;

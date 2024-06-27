import Welcome from "./Components/Welcome.jsx";
import WelcomeName from './Components/WelcomeName.jsx'
import MyUseState from './Components/StateMgmt/MyUseState.jsx';
import WelcomeUserButton from './Components/WelcomeUserButton.jsx';
import Counter from "./Components/Counter.jsx";
import Fruits from "./Components/Fruits.jsx";
import MyUseEffect from "./Components/StateMgmt/MyUseEffect.jsx";
import MyUseLayoutEffect from "./Components/StateMgmt/MyUseLayoutEffect.jsx";
import GetReq from "./Components/IncorporatingData/GetReq.jsx";
import GetJoke from "./Components/IncorporatingData/GetJoke.jsx";

function App() {

  return (
    <div>
      Hello World and React!
      {/* <Welcome></Welcome>
      <WelcomeName></WelcomeName>
      <WelcomeUserButton></WelcomeUserButton>
      <Counter></Counter>
      <Fruits></Fruits>
      <MyUseEffect></MyUseEffect>
      <MyUseState></MyUseState>
  <MyUseLayoutEffect></MyUseLayoutEffect>*/}
      <MyUseState></MyUseState>
      <GetReq></GetReq>
      <GetJoke></GetJoke>
    </div>
  );
}

export default App
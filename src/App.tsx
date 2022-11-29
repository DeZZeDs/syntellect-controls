import React, {useState} from "react";
import "./App.css";
import ControlWithButtons from "./components/ControlWithButtons";
import WrapperButtons from "./components/ControlWithButtons/WrapperButtons";
import ButtonControl from "./components/ControlWithButtons/ButtonControl";
import ControlWithSuggestions from "./components/ControlWithSuggestions";

const App = () => {
    /* task 1.1 */
    const [formOneState, setFormOneState] = useState<string>("");

    const onClickClear = () => {
        setFormOneState("");
    }

    const onClickGreening = () => {
        setFormOneState('Hello World!')
    }

    /* task 1.2 */
    const [formTwoState, setFormTwoState] = useState<string>("");
    const onClickCheckNumber = () => {
        if(Number(formTwoState)) {
            alert(formTwoState);
        }
    }

    const onClickShowAlert = () => {
        if(formTwoState !== '' && formTwoState.trim() !== '') {
            alert(formTwoState);
        }
    }

    return (
      <div className="wrapper">
          <h3>Task 1.1</h3>
          <ControlWithButtons setControlStates={setFormOneState} controlState={formOneState}>
              <WrapperButtons tag="right">
                  <ButtonControl onClick={onClickClear} text={"clear"}/>
                  <ButtonControl onClick={onClickGreening} text={"greeting"}/>
              </WrapperButtons>
          </ControlWithButtons>
          <h3>Task 1.2</h3>
          <ControlWithButtons setControlStates={setFormTwoState} controlState={formTwoState}>
              <WrapperButtons tag="left">
                  <ButtonControl onClick={onClickCheckNumber} text={"number"}/>
              </WrapperButtons>
              <WrapperButtons tag="right">
                  <ButtonControl onClick={onClickShowAlert} text={"alert"}/>
              </WrapperButtons>
          </ControlWithButtons>

          <h3>Task 2.1</h3>
          <ControlWithSuggestions countSuggestions={3}/>
          <h3>Task 2.2</h3>
          <ControlWithSuggestions countSuggestions={10}/>
      </div>
    )
}

export default App;

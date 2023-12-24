import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Modal from "./components/Modal";
import Screen from "./components/Screen";
import CalProvider from "./context/CalContext";

const myBtns = [
  ["AC", "+/-", "%", "÷"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalProvider>
      <Modal>
        <Screen />
        <ButtonBox>
          {myBtns.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Modal>
    </CalProvider>
  );
}

export default App;

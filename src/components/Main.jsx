import { useState } from "react";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerLists, setAnswerLists] = useState([]);

  function addNewAnswerList(newAnswer) {
    setAnswerLists([...answerLists, newAnswer]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form addNewAnswerList={addNewAnswerList} />
      </section>
    </main>
  );
}

export default Main;

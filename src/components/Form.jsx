import CheckBox from "./checkbox";
import RadioList from "./radio";
import { useState } from "react";

const initialFormData = {
  username: "",
  email: "",
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  bestFeatures: [],
  worstFeatures: [],
  agree: false,
  disagree: false,
};

export default function Form({ addNewAnswerList }) {
  const [answer, setAnswer] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(answer.disagree);
    addNewAnswerList(answer);

    setAnswer(initialFormData);
    let erraseArraybestFeatures = e.target.bestFeatures;
    let erraseArrayTworstFeatures = e.target.worstFeatures;
    let erraseArraytimeSpent = e.target.timeSpent;
    let erraseArrayConsistency = e.target.consistency;
    let erraseArrayColour = e.target.colour;
    let erraseArrayLogo = e.target.logo;

    let erraseArray = [
      ...erraseArraybestFeatures,
      ...erraseArrayTworstFeatures,
      ...erraseArraytimeSpent,
      ...erraseArrayConsistency,
      ...erraseArrayColour,
      ...erraseArrayLogo,
    ];

    erraseArray.forEach((input) => {
      input.checked = false;
    });
  }

  function handleChange(e) {
    let keyName = e.target.name;
    if (e.target.type === "checkbox") {
      if (keyName === "agree" || keyName === "disagree") {
        setAnswer({ ...answer, [keyName]: e.target.checked });
      } else {
        let filterAnswer = e.target.checked
          ? [...answer[keyName], e.target.value]
          : answer[keyName].filter((feature) => feature !== e.target.value);

        setAnswer({ ...answer, [keyName]: filterAnswer });
        console.log(filterAnswer);
      }
    } else {
      setAnswer({ ...answer, [keyName]: e.target.value });
    }
  }
  let initialFeaturesArray = [
    { value: "colour", text: "It's yellow!" },
    { value: "sound", text: " It squeaks!" },
    { value: "colour", text: "It has a logo!" },
    { value: "size", text: "It's big!" },
  ];
  let bestFeaturesArray = initialFeaturesArray.map((feature) => {
    return {
      name: "bestFeatures",
      value: feature.value,
      text: feature.text,
      type: "checkbox",
      onChange: handleChange,
    };
  });

  let worstFeatures = initialFeaturesArray.map((feature) => {
    return {
      name: "worstFeatures",
      value: feature.value,
      text: feature.text,
      type: "checkbox",
      onChange: handleChange,
    };
  });

  let timeSpent = [
    { value: "swimming", text: "Swimming" },
    { value: "bathing", text: "Bathing" },
    { value: "colour", text: "Chatting" },
    { value: "noTime", text: "I don't like to spend time with it" },
  ];

  timeSpent = timeSpent.map((feature) => {
    return {
      name: "timeSpent",
      value: feature.value,
      text: feature.text,
      type: "checkbox",
      onChange: handleChange,
    };
  });

  let consistency = [
    {
      id: "consistency1",
      name: "consistency",
      value: "1",
    },
    {
      id: "consistency2",
      name: "consistency",
      value: "2",
    },
    {
      id: "consistency3",
      name: "consistency",
      value: "3",
    },
    {
      id: "consistency4",
      name: "consistency",
      value: "4",
    },
  ];

  let colour = [
    {
      id: "colour1",
      name: "colour",
      value: "1",
    },
    {
      id: "colour2",
      name: "colour",
      value: "2",
    },
    {
      id: "colour3",
      name: "colour",
      value: "3",
    },
    { id: "colour4", name: "colour", value: "4" },
  ];

  let logo = [
    {
      id: "logo1",
      name: "logo",
      value: "1",
    },
    {
      id: "logo2",
      name: "logo",
      value: "2",
    },
    {
      id: "logo3",
      name: "logo",
      value: "3",
    },
    { id: "logo4", name: "logo", value: "4" },
  ];

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <CheckBox props={bestFeaturesArray} />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <CheckBox props={worstFeatures} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioList props={consistency} onChange={handleChange} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioList props={colour} onChange={handleChange} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioList props={logo} onChange={handleChange} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBox props={timeSpent} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

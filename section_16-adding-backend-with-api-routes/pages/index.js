import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef(); 

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, feedback: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback)
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email Address</label>
          <input type="email" id="id" ref={emailInputRef} />
        </div>
                <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea rows="5" id="feedback" ref={feedbackInputRef}/>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Get Feedback</button>

      <ul>
        {feedbackItems.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              {item.feedback}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;

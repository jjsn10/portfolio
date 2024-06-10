"use client";
import PropTypes from "prop-types";
import { useState } from "react";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form data-testid={"signupWidget"} className="mt-8 py-4 px-8 rounded border border-slate-500 w-4/5 mx-auto" onSubmit={handleSubmit} autoComplete={"false"}>
      <h2 className="text-2xl font-bold my-4" data-testid={"signupWidgetTitle"}>{title}</h2>
      {isSubscribed && (
        <p data-testid={"signupWidgetMessage"} className="text-base">
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p className="my-4" data-testid={"signupWidgetContent"}>{content}</p>
          <div className="my-4">
            {/* TO-DO: add your code here for the email input field, with data-testid={'signupWidgetInput}

            Remember:
            - validate that the input type is an email address using the "type" attribute
            - make the input field required
            - if the email is not valid, a message will be displayed, and submission will be prevented
            */}
            <input
              className="rounded w-1/2 h-10 p-2 border border-gray-400"
              data-testid="signupWidgetInput"
              type="email"
              autoComplete="off"
              name="subscribeEmail"
              required
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy ? true : false}
            />
            <button className="rounded bg-green-500 py-2 px-8 ml-2" data-testid="signupWidgetButton" type="submit" disabled={busy ? true : false}>
              {busy ? "Joining..." : "Join"}
            </button>

            {/* TO-DO: add your code here for the submission button, with the data-testid={'signupWidgetButton}

            Remember:
            - the button type should be "submit"
            - before the button is clicked the button text should say "Join"
            - while the form is busy, the button text should say "Joining"
            - after the form is submitted, the join button is no longer visible
            - after the form is submitted, the page will say "Thanks for subscribing"
            */}
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;

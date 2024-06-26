import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="contact" value="contact" />
        <p>
          <label>
            Your Name2: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Form;

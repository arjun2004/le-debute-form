import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h1>Le Debute Registration</h1>
      <div className="form">
        <form>
          <label>Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <br />
          <label>Phone number:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your phone number.."
          />
          <br />
          <label>Email adress:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
          />
          <br />
          <label>Class:</label>
          <br />
          <input
            type="text"
            id="class"
            name="class"
            placeholder="Your Class.."
          />
          <br />
          <label>Food preference:</label>
          <br />
          <select id="food" name="food">
            <option value="veg">Veg</option>
            <option value="non-veg">Non-veg</option>
          </select>
          <br />
          <br />
          <input type="file" id="file" />
          <label for="file" className="upl">
            Upload screenshot of the payment
          </label>
          <br />
          <br />
          <label>Transaction ID:</label>
          <br />
          <input
            type="text"
            id="tid"
            name="transactionid"
            placeholder="Transaction ID"
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

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
            id="fname"
            name="firstname"
            placeholder="Your phone number.."
          />
          <br />
          <label>Email adress:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your email.."
          />
          <br />
          <label>Class:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your Class.."
          />
          <br />
          <label>Food preference:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Veg/Non-Veg"
          />
          <br />
          <label>Transaction ID:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </form>
      </div>
    </>
  );
}

export default App;

import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar'

function Contact() {
  let history = useHistory()
  const clickHanhle = () => {
    history.push('/service')
  }
  return (
    <>
      <Navbar />
      <section >
        <h1>Welcome to Payment page</h1>
        <div className="field">
          <label>Card Number:</label>
          <input
            type="text"
            name="email"
            placeholder="enter card number"
          // value={Input.email}
          />
          <label>Name on Card:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter name"
          // value={Input.email}
          />
          <label>Enter expiry date:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter expiry date of card  mm/yy"
          // value={Input.email}
          />
          <button>SUBMIT</button>
          <button onClick={clickHanhle}>Go back to service</button>
        </div>
      </section>
    </>
  )
}

export default Contact

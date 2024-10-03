import React from 'react'

function Contact() {
  return (
    <div>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="idname" placeholder='Full Name' required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="idemail" placeholder='example@mail.com' required/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <input type="text" name="message" id="idmessage" placeholder='Tell us about your query...' required/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Contact

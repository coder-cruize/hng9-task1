function Contact() {
  const name = "Lekan"
  return (
    <div className="Contact">
      <div className="center">
        <header>
          <h2>Contact Me</h2>
          <span>Hi there, contact me to ask me about anything you have in mind.</span>
        </header>
        <form>
          <div class="field _small">
            <label>First Name</label>
            <input id="first_name" type="text" placeholder="Enter your first Name" />
          </div>
          <div class="field _small">
            <label>Last Name</label>
            <input id="last_name" type="text" placeholder="Enter your last Name" />
          </div>
          <div class="field">
            <label>Email</label>
            <input id="email" type="email" placeholder="yourname@email.com" />
          </div>
          <div class="field">
            <label>Message</label>
            <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
          </div>
          <div className="check">
            <input type="checkbox" />
            <span>You agree to providing your data to {name} who may contact you.</span>
          </div>
          <button type="button" id="btn__submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

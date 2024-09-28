import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiryMonth: "",
    cardExpiryYear: "",
    cardCvc: "",
  });

  const [completed, setCompleted] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <div className="container">
      <nav className="card-container">
        <div className="front-card">
          <div className="card-details">
            <img src="./images/card-logo.svg" alt="card-logo" />
            <div className="card-info">
              <h1 className="card-num">{formData.cardNumber}</h1>

              <div className="owner">
                <h2 className="card-name">{formData.cardName}</h2>
                <div className="card-date">
                  <span>{formData.cardExpiryMonth}</span> /{" "}
                  <span>{formData && formData.cardExpiryYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="back-card">
          <p className="card-cvc">{formData.cardCvc}</p>
        </div>
      </nav>

      <main>
        {completed ? (
          <ThankYou />
        ) : (
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setCompleted={setCompleted}
            formData={formData}
          />
        )}
      </main>
    </div>
  );
}

function Form({ formData, handleChange, handleSubmit, setCompleted }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="form-section">
        <label htmlFor="card-name">Cardholder Name</label>
        <input
          type="text"
          id="name"
          name="cardName"
          value={formData.cardName}
          onChange={(e) => handleChange(e)}
          placeholder="e.g Jane Appleseed"
        />
      </section>
      <section className="form-section">
        <label htmlFor="card-number">Card Number</label>
        <input
          type="tel"
          id="card-number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={(e) => handleChange(e)}
          placeholder="e.g 1234 5678 1234 5678"
          maxLength={16}
        />
      </section>
      <section className="form-section card-exp">
        <div className="exp-month">
          <label htmlFor="card-expiry">EXP. DATE (MM/YY)</label>

          <span>
            <input
              type="month"
              id="card-expiry"
              name="cardExpiryMonth"
              value={formData.cardExpiryMonth}
              onChange={(e) => handleChange(e)}
              placeholder="MM"
              maxLength={2}
            />
            <input
              type="year"
              id="card-expiry"
              name="cardExpiryYear"
              value={formData.cardExpiryYear}
              onChange={(e) => handleChange(e)}
              placeholder="YY"
              maxLength={2}
            />
          </span>
        </div>

        <div className="cvc">
          <label htmlFor="card-cvc">CVC</label>
          <input
            type="tel"
            id="card-cvc"
            name="cardCvc"
            value={formData.cardCvc}
            onChange={(e) => handleChange(e)}
            placeholder="e.g 123"
            maxLength={3}
          />
        </div>
      </section>
      <button type="submit">Confirm</button>
    </form>
  );
}

function ThankYou() {
  return (
    <div className="thank-you">
      <img src="/images/icon-complete.svg" alt="checkmark" />
      <h3>Thank you!</h3>
      <p>We've added your card details.</p>
      <button type="submit">Continue</button>
    </div>
  );
}

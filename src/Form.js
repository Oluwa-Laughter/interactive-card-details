export default function Form() {
  return (
    <form className="form">
      <section className="form-section">
        <label htmlFor="card-name">Cardholder Name</label>
        <input
          type="text"
          id="name"
          name="card-name"
          placeholder="e.g Jane Appleseed"
        />
      </section>
      <section className="form-section">
        <label htmlFor="card-number">Card Number</label>
        <input
          type="tel"
          id="card-number"
          name="card-number"
          placeholder="e.g 1234 5678 1234 5678"
          maxLength={16}
        />
        <spa></spa>
      </section>
      <section className="form-section card-exp">
        <div className="exp-month">
          <label htmlFor="card-expiry">EXP. DATE (MM/YY)</label>

          <span>
            <input
              type="month"
              id="card-expiry"
              name="card-expiry"
              placeholder="MM"
            />
            <input
              type="year"
              id="card-expiry"
              name="card-expiry"
              placeholder="YY"
            />
          </span>
        </div>

        <div className="cvc">
          <label htmlFor="card-cvc">CVC</label>
          <input
            type="tel"
            id="card-cvc"
            name="card-cvc"
            placeholder="e.g 123"
            maxLength={3}
          />
        </div>
      </section>

      <button type="submit">confirm</button>
    </form>
  );
}

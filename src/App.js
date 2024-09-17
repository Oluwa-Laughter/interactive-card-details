import Thank from "./Thank.js";
import Form from "./Form.js";
export default function App() {
  return (
    <div className="container">
      <nav>
        <div className="front-card"></div>

        <div className="back-card"></div>
      </nav>

      <main>
        <Form />
        <Thank />
      </main>
    </div>
  );
}

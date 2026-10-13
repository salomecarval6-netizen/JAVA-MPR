import "../../plans.css";
import { Link } from "react-router-dom";
function Plans() {
  return (
    <div>
      <h1>SPONSORSHIP</h1>
      <h2>PACKAGES</h2>

      <table>
        <thead>
          <tr>
            <th>FEATURES</th>
            <th>BRONZE</th>
            <th>SILVER</th>
            <th>GOLD</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>PRICE</th>
            <th>₹5,000</th>
            <th>₹15,000</th>
            <th>₹30,000</th>
          </tr>

          <tr>
            <td>LOGO ON WEBSITE:</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>LOGO ON POD:</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>SOCIAL MEDIA COVERAGE:</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>STUDENT RESUME BOOK:</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>LAB TOUR:</td>
            <td></td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>PRIVATE EVENT:</td>
            <td></td>
            <td></td>
            <td>✔</td>
          </tr>
        </tbody>
      </table>
    
    <Link to="/sponsor" className="back-link">
          ← Back to Sponsor Page
        </Link>
    </div>
  );
}

export default Plans;
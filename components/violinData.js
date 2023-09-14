import "spectre.css";
import styles from "../styles/violinData.module.css";

export default function GetViolinData() {
  // Dynamically displayed data from DB of all violinists
  return (
    <div className={styles.tableDisplay}>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Adjusted Rotation</th>
            <th>RNOC</th>
            <th>On Call Count</th>
            <th>Rotation</th>
            <th>Minutes(rot.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="fullName"></td>
            <td id="adjustedRotation"></td>
            <td id="rnoc"></td>
            <td id="onCall"></td>
            <td id="rotation"></td>
            <td id="minutes"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

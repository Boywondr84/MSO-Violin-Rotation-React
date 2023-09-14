import "spectre.css";
import styles from "../styles/updateViolin.module.css";

export default function UpdateViolin() {
  // Update Single Violinists' Data
  return (
    <div className={styles.updateVlnData}>
      <form
      //   className={styles.hidden}
      >
        <div id="dataDisplay" class="dataDisplay">
          <p id="displayName"></p>
          <p>Adjusted Rotation:</p>
          <input
            type="number"
            step=".5"
            id="adjRotationEl"
            name="adjRotation"
          />
          <p>RNOC:</p>
          <input type="number" min="0" max="8" id="rnocEl" name="rnocTime" />
          <p>On Call:</p>
          <input type="number" min="0" id="onCallEl" name="onCallTime" />
          <p>Rotation:</p>
          <input type="number" min="0" id="rotationEl" name="rotationTime" />
          <p>Minutes:</p>
          <input type="number" min="0" id="minutesEl" name="minutesTime" />
        </div>
        <div className={styles.updateBtns}>
          <button class="btn btn-lg" id="requestForm">
            Open Leave Form
          </button>
          <button class="btn btn-lg" id="startOver" type="reset">
            Close This Form
          </button>
          <button class="btn btn-lg" id="updateVlnBtn">
            Save This Data
          </button>
        </div>
      </form>
    </div>
  );
}

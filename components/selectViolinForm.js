import "spectre.css";
import styles from "../styles/selectViolin.module.css";

export default function SelectViolin() {
  return (
    <div className="form-group">
      <div className={styles.getVln}>
        <label htmlFor="violinist-data-select">Select A Violinist:</label>
        <select class="getID" id="get-violinist-select" value="" required>
          <option id="get-violinist-select" class="getOption" disabled>
            Select A Violinist
          </option>
        </select>
        <form class="getVlnData">
          <button
            className="btn btn-lg btn-success"
            id="get-vln-by-id-btn"
            type="submit"
          >
            Fetch Violinist Data
          </button>
        </form>
        <form class="delete">
          <button
            onClick="return confirm('Are you sure you want to delete?');"
            class="btn btn-lg btn-error"
            id="delete-violinist-by-id"
            type="submit"
          >
            Delete Violinist
          </button>
        </form>
      </div>
    </div>
  );
}

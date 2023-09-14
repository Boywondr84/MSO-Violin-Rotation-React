import styles from "../styles/addViolin.module.css";

export default function AddViolin() {
  return (
    <div className={styles.inputForms}>
      <form className={styles.formGroupAdd}>
        <label for="firstName">First Name:</label>
        <input type="text" name="first" required />
        <label for="lastName">Last Name:</label>
        <input type="text" name="last" required />
        <label for="position">Position:</label>
        <input type="number" name="position" min="1" max="12" required />
        <div className={styles.addVlnBtn}>
          <button className="btn btn-lg">Add A Violinist</button>
        </div>
      </form>
    </div>
  );
}

import styles from "../styles/header.module.css";
import "spectre.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div class="columns">
        <div class="column col-3 col-xl-4 hide-lg">
          <Image src="/images/MSO-logo.png" height={214} width={330} />
          <h1>Violin I Rotation Data Stored Using Firebase</h1>
        </div>
      </div>
    </div>
  );
}

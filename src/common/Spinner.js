import React from "react";
import { Box } from "rebass";
import styles from "./Spinner.module.css";
import StarIcon from "./StarIcon";

const Spinner = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <div className={styles.Spinner}>
        <div className={styles.ring}>
          <div />
          <div />
          <div />
        </div>

        <div className={styles.Star}>
          <div className={styles.DoubleBounce1}>
            <StarIcon />
          </div>
          <div className={styles.DoubleBounce2}>
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

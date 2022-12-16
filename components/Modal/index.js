import styles from "./Modal.module.css";
import React, { useState } from "react";

function Modal({ title, drink }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen)
    return (
      <div className={styles.drink_name} onClick={() => setIsOpen(true)}>
        {title}
      </div>
    );
  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal}>
        <h3>{drink}</h3>
      </div>
    </div>
  );
}

export default Modal;

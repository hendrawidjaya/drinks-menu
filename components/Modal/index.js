import styles from "./Modal.module.css";
import React, { useState } from "react";

function Modal({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen)
    return (
      <div className={styles.drink_name} onClick={() => setIsOpen(true)}>
        {title}
      </div>
    );
  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;

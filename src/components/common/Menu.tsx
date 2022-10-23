import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/best">
        <a className={styles.link}>Best</a>
      </Link>
      <Link href="/new">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/top">
        <a className={styles.link}>Top</a>
      </Link>
    </div>
  );
};

export default Menu;

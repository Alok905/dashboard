import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

import React from "react";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <label>Username</label>
        <input type="text" name="username" placeholder="John Doe" />
        <label>Email</label>
        <input type="email" name="email" placeholder="jjohn@example.com" />
        <label>Password</label>
        <input type="password" name="password" placeholder="John Doe" />
        <label>Username</label>
        <input type="text" name="username" placeholder="John Doe" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="+919034" />
        <label>Address</label>
        <textarea type="text" name="address" placeholder="Mew York" />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
    </div>
  );
};

export default SingleUserPage;

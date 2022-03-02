import React from "react"
import ContactsPicture from '../contacts_picture/contacts_picture';
import ContactData from '../contact_data/contact_data';
import styles from "./contacts.module.css";

const Contacts = () => {


  




  return <section className={styles.contacts_container}>
    
    <div className={styles.contacts_pics_container}>
      <ContactsPicture/>
    </div>

    <div className={styles.contacts_words_container}>
    <ContactData/>
    </div>



</section>

}
export default Contacts;
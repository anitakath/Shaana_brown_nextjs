import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

//COMPONENTS
import Layout from "@/components/Layout";

//STYLES
import styles from '../styles/Contact.module.css'
import '../styles/Input.css'
 import "styled-jsx/style";

//HOOKS
import useInput from "@/hooks/use-input";




const Contact = () => {

   // ---------------------------- USE INPUT
   const {
     value: enteredFirstName,
     changeValueHandler: firstNameChangeHandler,
     inputBlurHandler: firstNameBlurHandler,
     valueIsValid: firstNameIsValid,
     style: fNameStyle,
     hasError: hasError,
   } = useInput((value) => value.trim() !== "" && value.length >= 2);

  
   
   const {
     value: enteredLastName,
     changeValueHandler: lastNameChangeHandler,
     inputBlurHandler: lastNameBlurHandler,
     valueIsValid: lastNameIsValid,
     style: lNameStyle,
   } = useInput((value) => value.trim() !== "" && value.length >= 2);

   const {
     value: enteredAdress,
     changeValueHandler: adressChangeHandler,
     inputBlurHandler: adressBlurHandler,
     valueIsValid: adressIsValid,
     style: adressStyle,
   } = useInput((value) => value.trim() !== "" && value.length >= 4);

   const {
     value: enteredPostal,
     changeValueHandler: postalChangeHandler,
     inputBlurHandler: postalBlurHandler,
     style: postalStyle,
   } = useInput((value) => value !== NaN && value.length === 5);

   const {
     value: enteredTel,
     changeValueHandler: telChangeHandler,
     inputBlurHandler: telBlurHandler,
     valueIsValid: telIsValid,
     style: telStyle,
     hasError: hasErrorTel,
   } = useInput((value) => value.length >= 6 && value.length <= 15);




  const {
    value: enteredEmail,
    changeValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    style: emailStyle,
  } = useInput((value) => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  });

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let nextYear = date.getFullYear() + 1;

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const currentDate = `${year}-${month}-${day}`;

  const maxDate = `${nextYear}-${month}-${day}`;

  const {
    value: enteredBirth,
    changeValueHandler: birthChangeHandler,
    inputBlurHandler: birthBlurHandler,
    style: birthStyle,
  } = useInput((value) => value >= currentDate && value <= maxDate);

  /* value === $( "#datepicker" ).datepicker( "option", "dateFormat",'yy-mm-dd') */

  const {
    value: enteredInsurance,
    changeValueHandler: insuranceChangeHandler,
    inputBlurHandler: insuranceBlurHandler,
    valueIsValid: insuranceIsValid,
    style: insuranceStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredMessage,
    changeValueHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim() !== "");







  const [checkboxCheck, setCheckboxCheck] = useState(false);



  const checkboxHandler = () => {
    setCheckboxCheck((x) => !x);
  };


   const [formComplete, setFormComplete] = useState(false);



  useEffect(() => {
    if (
      checkboxCheck === true &&
      firstNameIsValid &&
      lastNameIsValid &&
      adressIsValid &&
      enteredPostal &&
      telIsValid &&
      emailIsValid &&
      insuranceIsValid
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [
    checkboxCheck,
    firstNameIsValid,
    lastNameIsValid,
    adressIsValid,
    enteredPostal,
    emailIsValid,
    telIsValid,
    insuranceIsValid,
  ]);






  const submitHandler = async (e) => {
    e.preventDefault();


    const formData={
      vorname: enteredFirstName,
      nachname: enteredLastName,
      adresse: enteredAdress,
      postleitzahl: enteredPostal,
      telefonnummer: enteredTel,
      email: enteredEmail,
      geburtstermin: enteredBirth,
      versicherung: enteredInsurance,
      nachricht: enteredMessage,
      datenschutz: checkboxCheck
    }

  
    

    try {
      // Senden des Vornamens an die Backend-API
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Erfolgsnachricht von der API
    } catch (error) {
      console.error(error); // Fehlermeldung bei einem Fehler in der API
    }
  }
  
 

 
  /*
  action = "https://formspree.io/f/myyqgqrr";
  method = "POST";*/
  



  return (
    <div>
      <Layout>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContainer}>
            <h1>Kontaktiere mich</h1>
            
            <p>
              Deine Daten werde ich nur für die von dir gewünschten Wünsche
              nutzen und zu keinem Zeitpunkt an Dritte übermitteln. <br />
              Erfahre mehr unter
            </p>

            <form onSubmit={submitHandler} className={styles.formContainer}>
              <label htmlFor="fName"> Vorname* </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="vorname"
                className={fNameStyle}
                value={enteredFirstName}
                onBlur={firstNameBlurHandler}
                onChange={firstNameChangeHandler}
                required
              ></input>

              <label htmlFor="lName"> Nachname* </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="nachname"
                className={lNameStyle}
                value={enteredLastName}
                onBlur={lastNameBlurHandler}
                onChange={lastNameChangeHandler}
                required
              ></input>

              <label htmlFor="user"> Adresse & Hausnummer* </label>
              <input
                type="text"
                id="user"
                name="adress"
                placeholder="adresse und hausnummer"
                className={adressStyle}
                value={enteredAdress}
                onBlur={adressBlurHandler}
                onChange={adressChangeHandler}
                required
              ></input>

              <label htmlFor="user"> Postleitzahl* </label>
              <input
                type="number"
                id="user"
                name="postal"
                placeholder="postleitzahl"
                className={postalStyle}
                value={enteredPostal}
                onChange={postalChangeHandler}
                onBlur={postalBlurHandler}
                required
              ></input>

              <label htmlFor="user"> Telefon* </label>
              <input
                type="tel"
                id="user"
                name="tel"
                placeholder="telefon"
                className={telStyle}
                value={enteredTel}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
                required
              ></input>

              <label htmlFor="user"> Email* </label>
              <input
                type="email"
                id="user"
                name="email"
                placeholder="email"
                className={emailStyle}
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              ></input>

              <label htmlFor="user"> errechneter Entbindungstermin* </label>
              <input
                type="date"
                id="datepicker"
                name="birth"
                placeholder="errechneter Entbindungstermin"
                className={birthStyle}
                value={enteredBirth}
                onChange={birthChangeHandler}
                onBlur={birthBlurHandler}
                required
              />

              <label htmlFor="user"> Krankenkasse* </label>
              <input
                type="text"
                id="user"
                name="insurance"
                required
                value={enteredInsurance}
                onChange={insuranceChangeHandler}
                onBlur={insuranceBlurHandler}
                placeholder="krankenkasse"
                className={insuranceStyle}
              ></input>

              <label htmlFor="user">
                {" "}
                schreibe mir gern weitere Anliegen / Fragen{" "}
              </label>
              <textarea
                id="user"
                name="message"
                placeholder="schreibe mir gern weitere anliegen / fragen"
                className="input"
              ></textarea>

              <label htmlFor="user"> </label>

              <div>
                <input type="checkbox" onClick={checkboxHandler}></input> ja,
                ich habe den Datenschutzhinweis gelesen und akzeptiere die
                dortigen Bedingungen.
              </div>

              <button type="submit">sende deine Anfrage</button>

              {!formComplete && (
                <p className={styles.formInfos}>
                  bitte fülle alle Felder mit den Sternchen unbedingt aus und
                  akzeptiere die Datenschutzhinweise, ehe du die Kontaktanfrage
                  abschickst
                </p>
              )}
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;

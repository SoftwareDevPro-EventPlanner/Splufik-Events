/**************************************************************************
 * 
 * Product name:Eventee Web App
 * 
 * Product Desc:This software is 
 * built for allowing users to to buy and 
 * event plan while we plan the event for them
 * 
 * Product founders:Eventee team @ Mainor{Abiola,Chizoba,Ifeanyi,Peter & Onah}
 * 
 * Product stack:Html,Css,Jscript,Firebase Storage Api,Imgbb,Parcel bundler mod
 * 
 * This file: this file is responsible for login user into the admin panel
 * Production year:2020
 * 
 *  ...... .       . .......  .    .  ......  ......   .......
 *  ....     .   .   .....    . .  .    ..    .....    .....
 *  ......     .     .......  .    .    ..    ......   .......
 * 
 /**************************************************************************/

 document.addEventListener('DOMContentLoaded', _ => {
  const form = document.querySelector('form');
  const validationRegExp = {
    emailRegExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    passRegExp: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const loginDetails = {
      email: form.email.value,
      password: form.password.value
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then(() => {
        location.assign('adminInsertionPanel.html');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(
          'ERROR CODE: ' + errorCode + '\n\n' + 'ERROR MESSAGE: ' + errorMessage
        );
      });
    form.reset();
  });

 const homeContent = document.querySelector('#hm a');
 const aboutContent = document.querySelector('#ab a');
 const eventplanContent = document.querySelector('#ep a');
 const contactContent = document.querySelector('#ct a');
 const AdLog_Text= document.querySelector('#Alog');
 const Login_password = document.querySelector('#password');
 const LoginBtn= document.querySelector('input[type="submit"]');


 const updateGerman = _ => {
  aboutContent.textContent = 'Über';
  homeContent.textContent = 'Zuhause';
  eventplanContent.textContent = 'Veranstaltungsplan';
  contactContent.textContent = 'Kontakt';
  
  AdLog_Text.textContent = 'Admin Anmeldung';
  LoginBtn.value = 'Anmeldung';
 };

 const updateEnglish = _ => {
  aboutContent.textContent = 'About';
  homeContent.textContent = 'Home';
  eventplanContent.textContent = 'Event Plan';
  contactContent.textContent = 'Contact';
  
  AdLog_Text.textContent = 'Admin Login';
  LoginBtn.value = 'Login';
 };


 /***********************
 * @function{*} Eng localisation
 ***********************/
 const engLocale = _ => {
  const getEngLocale = document.querySelector('#engLocale');

  getEngLocale.addEventListener('click', () => {
    updateEnglish();
  });
 };
 engLocale();

 /***********************
 * @function{*} Germ localisation
 ***********************/
 const germLocale = _ => {
  const getGermLocale = document.querySelector('#germLocale');

  getGermLocale.addEventListener('click', () => {
    updateGerman();
  });
 };
 germLocale();
})

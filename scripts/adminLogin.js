/**************************************************************************
 * 
 * Product name:Eventee Web App
 * 
 * Product Desc:This software is 
 * built for allowing users to to buy and 
 * event plan while we plan the event for them
 * 
 * Product founders:Eventee team @{Mainor:Abiola,Chizoba,Ifeanyi & Onah}
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
});

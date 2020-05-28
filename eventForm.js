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
 * This file: this file is responsible for getting the clinets event plan to the  
 * backend
 * Production year:2020
 * 
 *  ...... .       . .......  .    .  ......  ......   .......
 *  ....     .   .   .....    . .  .    ..    .....    .....
 *  ......     .     .......  .    .    ..    ......   .......
 * 
 /**************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const dataCollection = {
      dob: form.dob.value,
      email: form.email.value,
      eventType: form.eventType.value,
      eventDescription: form.description.value,
      eventLocation: form.eventLocation.value,
      eventDate: form.eventDate.value,
      fullName: form.fullName.value,
      phoneNumber: form.phoneNumber.value
    };

    db.collection('clientsEvent')
      .add(dataCollection)
      .then(res => {
        console.log('*******Successfully Submited*******');
        alert('Submitted Successfully');
      })
      .catch(err => {
        console.log('*******Submition Faile*******\n', err);
        form.style.border = 'solid 1px red';
      });
    form.reset();
  });
  /************The below is Localization Implementation***************** */
  const homeContent = document.querySelector('#hm a');
  const aboutContent = document.querySelector('#ab a');
  const eventplanContent = document.querySelector('#ep a');
  const contactContent = document.querySelector('#ct a');
  const Intro_txt = document.querySelector('#introTxt');
  const fulName = document.querySelector('#FulN');
  const Intro_txt1 = document.querySelector('#introTxt1');
  const wedding= document.querySelector('#wed');
  const birtday = document.querySelector('#Bdae');
  const summery = document.querySelector('#sum');
  const Total = document.querySelector('#tol');
  const welcN = document.querySelector('#welcNote');
  const submitBtn = document.querySelector('#payment');

  const updateGerman = _ => {
    aboutContent.textContent = 'Über';
    homeContent.textContent = 'Zuhause';
    contactContent.textContent = 'Kontakt';
    eventplanContent.textContent = 'Veranstaltungsplan';
    Intro_txt.textContent = 'Geben Sie Ihre Daten ein';
    fulName.textContent = 'vollständiger Name';
    wedding.textContent = 'Hochzeit';
    Intro_txt1.textContent = 'Wählen Sie Ihren Ereignistyp';
    birtday.textContent = 'Geburtstag';
    summery.textContent = 'Zusammenfassung';
    welcN.textContent = 'Wir sorgen dafür, dass es immer passiert';
    Total.textContent = 'gesamt';
    submitBtn.value = 'einreichen';
  };

  const updateEnglish = _ => {
    aboutContent.textContent = 'About';
    homeContent.textContent = 'Home';
    contactContent.textContent = 'Contact';
    eventplanContent.textContent = 'Event Plan';
    Intro_txt.textContent = 'fill your details';
    fulName.textContent = 'Full Name';
    wedding.textContent = 'Wedding';
    Intro_txt1.textContent = 'Select your event type';
    birtday.textContent = 'Birthday';
    summery.textContent = 'Summery';
    welcN.textContent = 'We Make it Happen Always';
    Total.textContent = 'Total';
    submitBtn.value = 'submit';
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


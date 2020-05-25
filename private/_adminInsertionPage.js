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
 * This file: this file is responsible for getting the different types of event from 
 * the admin to the backend
 * Production year:2020
 * 
 *  ...... .       . .......  .    .  ......  ......   .......
 *  ....     .   .   .....    . .  .    ..    .....    .....
 *  ......     .     .......  .    .    ..    ......   .......
 * 
 /**************************************************************************/

 (function() {
    //Setting data to footer
    const currentDate = new Date();
    document.querySelector('time').textContent += currentDate.getFullYear();
  
    /*********************
     *@{function} send data to firebase database
     *********************/
    const sendPlanToDB = async _ => {
      const form = document.querySelector('form');
  
      form.addEventListener('submit', e => {
        e.preventDefault();
  
        const dataCollection = {
          eventPlan: form.eventPlan.value,
          eventDesc: form.eventDesc.value,
          eventPrice: form.eventPrice.value,
          eventImg: form.eventImgLink.value
        };
  
        db.collection('eventPlans')
          .add(dataCollection)
          .then(_ => {
            document.querySelector('progress').value = '100';
            console.log('*****Data successfully added*****');
          })
          .catch(err => console.log('Data failed to be added\n', err));
        form.reset();
      });
    };
    sendPlanToDB();
  
    /************The below is Localization Implementation***************** */
    const homeContent = document.querySelector('#hm a');
    const aboutContent = document.querySelector('#ab a');
    const eventplanContent = document.querySelector('#ep a');
    const contactContent = document.querySelector('#ct a');
    const eventsPanel = document.querySelector('#eventsPanel');
    const insertPanel = document.querySelector('#insertPanel');
    const welcomeNote = document.querySelector('#welNote');
    const eventPlanType = document.querySelector('#eventPlanType');
    const eventImageLink = document.querySelector('#eventImageLink');
    const eventPrice = document.querySelector('#eventPrice');
    const eventDescription = document.querySelector('#eventDescription');
    const submitBtn = document.querySelector('#submitBtn');
  
    const updateGerman = _ => {
      aboutContent.textContent = 'Über';
      homeContent.textContent = 'Zuhause';
      contactContent.textContent = 'Kontakt';
      eventplanContent.textContent = 'Veranstaltungsplan';
      eventPlanType.textContent = 'Art des Ereignisplans';
      eventImageLink.textContent = 'Link zum Ereignisbild';
      eventDescription.textContent = 'Eventbeschreibung';
      eventsPanel.textContent = 'Fenster Client-Ereignisse anzeigen';
      insertPanel.textContent = 'Administrator-Einfügefeld';
      welcomeNote.textContent = 'Willkommen im Admin Plan Panel';
      eventPrice.textContent = 'Veranstaltungspreis';
      submitBtn.value = 'einreichen';
    };
  
    const updateEnglish = _ => {
      aboutContent.textContent = 'About';
      homeContent.textContent = 'Home';
      contactContent.textContent = 'Contact';
      eventplanContent.textContent = 'Event Plan';
      eventPlanType.textContent = 'Event plan type';
      eventImageLink.textContent = 'Event image link';
      eventDescription.textContent = 'Event description';
      eventsPanel.textContent = 'View Clients Events Panel';
      insertPanel.textContent = 'Admin Insertion Panel';
      welcomeNote.textContent = 'Welcome to Admin Plan Panel';
      eventPrice.textContent = 'Event price';
      submitBtn.value = 'Submit';
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
  })();

  
/*******************************
 * @function{}unit testing
 *******************************/
const masterTester = _ =>{
  //Below is testing the return value of english Locale
  const testingOfEngLocaleFn = _ =>{
    //Negative Testing Below
    if(!engLocale.length) '*******************\nTest failed\n*******************'
    //Positive Testing Below
    else if(engLocale.length) '*******************\nTest Passed\n*******************'
}
testingOfEngLocaleFn()


 //Below is testing the return value of German Locale
 const testingOfGermLocaleFn = _ =>{
  //Negative Testing Below
  if(!germLocale.length) '*******************\nTest failed\n*******************'
  //Positive Testing Below
  else if(germLocale.length) '*******************\nTest Passed\n*******************'
}
testingOfGermLocaleFn()

}

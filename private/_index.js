(function() {
  /************The below is Localization Implementation***************** */
  const homeContent = document.querySelector('#hm a');
  const aboutContent = document.querySelector('#ab a');
  const eventplanContent = document.querySelector('#ep a');
  const contactContent = document.querySelector('#ct a');
  const seePlan = document.querySelector('.heading__button');
  const eventTxt = document.querySelector('.heading-primary--main');
  const youWantTxt = document.querySelector('.heading-primary--sub');

  const updateGerman = _ => {
    aboutContent.textContent = 'Über';
    homeContent.textContent = 'Zuhause';
    contactContent.textContent = 'Kontakt';
    eventplanContent.textContent = 'Veranstaltungsplan';
    seePlan.textContent = 'Siehe Planen';
    eventTxt.textContent = 'Veranstaltung';
    youWantTxt.textContent = 'Sie wollen, wir machen es möglich!';
  };

  const updateEnglish = _ => {
    aboutContent.textContent = 'About';
    homeContent.textContent = 'Home';
    contactContent.textContent = 'Contact';
    eventplanContent.textContent = 'Event Plan';
    seePlan.textContent = 'See Plan';
    eventTxt.textContent = 'Event';
    youWantTxt.textContent = 'you want, We make Happen!';
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
const masterTester = _ => {
  //Below is testing the return value of english Locale
  const testingOfEngLocaleFn = _ => {
    //Negative Testing Below
    if (!engLocale.length)
      '*******************\nTest failed\n*******************';
    //Positive Testing Below
    else if (engLocale.length)
      '*******************\nTest Passed\n*******************';
  };
  testingOfEngLocaleFn();

  //Below is testing the return value of German Locale
  const testingOfGermLocaleFn = _ => {
    //Negative Testing Below
    if (!germLocale.length)
      '*******************\nTest failed\n*******************';
    //Positive Testing Below
    else if (germLocale.length)
      '*******************\nTest Passed\n*******************';
  };
  testingOfGermLocaleFn();
};

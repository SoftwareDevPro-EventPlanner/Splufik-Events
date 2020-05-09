/**************************************************************************
 * 
 * Product name:Eventee Web App
 * 
 * Product Desc:This software is 
 * built for allowing users to buy an
 * event plan while we plan the event for them
 * 
 * Product founders:Eventee team @{Mainor:Abiola,Chizoba,Ifeanyi & Onah}
 * 
 * Product stack:Html,Css,Jscript,Firebase Storage Api,Imgbb,Parcel bundler mod
 * 
 * Production year:2020
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
})();

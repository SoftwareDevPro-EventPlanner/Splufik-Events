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
        alert('Submitted Successfully')
      })
      .catch(err => {
        console.log('*******Submition Faile*******\n', err);
        form.style.border = 'solid 1px red';
      });
      form.reset()
  });
});

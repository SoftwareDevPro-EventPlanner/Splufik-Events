(function() {
  const currentDate = new Date();
  document.querySelector('time').textContent += currentDate.getFullYear();
  const getEventPlanContainer = document.querySelector('.eventPlan-container');

  const updateUi = (doc, id) => {
    console.log(getEventPlanContainer, doc);
    const priceConversion = Number(doc.eventPrice).toFixed(2);
    console.log(priceConversion);
    const htmlTemplate = `
      <div class="card">
      <div class="card-header"></div>
     <div class="image">
      <img src="${doc.eventImg}" alt="${doc.eventPlan}" />  
     </div>
     <div class="title">
      <h1>${doc.eventPlan}</h1>
      <p>${doc.eventDesc}</p>
      <p>$ ${priceConversion} </p>
     </div>
     <div class="card-footer">
     <a href="/eventForm.html" class="button">Buy Plan</a>
     </div>
     </div>
     </div>
 </div>`;

    getEventPlanContainer.innerHTML += htmlTemplate;
  };

  const getStudentDetails = () => {
    db.collection('eventPlans').onSnapshot(snapshot => {
      snapshot.docChanges().map(change => {
        if (change.type == 'added') {
          updateUi(change.doc.data(), change.doc.id);
          console.log(change.doc.data(), change.doc.id);
        }
      });
    });
  };
  getStudentDetails();
})();

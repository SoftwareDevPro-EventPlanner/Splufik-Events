//listener for the confirm order button
const confirm = document.querySelector('button');
confirm.addEventListener('click', function() {
  console.log('order confirmed');
});

//fetching db data
const getAllBookings = () => {
  db.collection('clientsEvent')
    .get()
    .then(snapshots => {
      setupEvents(snapshots.docs);
    });
};
getAllBookings();

//targeting the div class
const eventClients = document.querySelector('.bookings');

const setupEvents = data => {
  let html = '';
  data.forEach(doc => {
    const clientsEvent = doc.data();
    const li = `
        <div>
        <ul>
            <li>Name: ${clientsEvent.fullName}</li>
            <li>Date of birth: ${clientsEvent.dob}</li>
            <li>Email Id: ${clientsEvent.email}</li>
            <li>Date of event: ${clientsEvent.eventDate}</li>
            <li>Type of event: ${clientsEvent.eventType}</li>
            <li>Location of event: ${clientsEvent.eventLocation}</li>
            <li>Phone number: ${clientsEvent.phoneNumber}</li>
            <li>Special request: ${clientsEvent.eventDescription}</li>
        </ul> 
        </div>
        <br/>
        <button>Confirm order</button>
        <br/>
        `;
    html += li;
  });

  //display of data fetched from database
  eventClients.innerHTML = html;
};

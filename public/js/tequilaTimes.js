let createCard = (event) => {
    return `
    <div class='event__details box grid-card dashCard'>

                    <div class="event__city"> Where? ${event.City.name}</div>
                    <div class="event__venue"> ð ${event.venue}</div>
                    <div class="event__address"> ðš ${event.address}</div>
                    <div class="event__date"> ð ${event.date}</div>
                    <div class="event__limit"> ${event.limit - event.numOfGuests} Seats Left</div>
                    <progress class="progress is-success" value='${event.numOfGuests}' max='${event.limit}'> ${(event.numOfGuests / event.limit) * 100}%</progress>
                    <div class="event__na"> ðĪŠ Attending ${event.numOfGuests} </div>
                    <a class='event-link button1' href='/events/${event.id}'> check it out</a>

    </div>
    `;
}

document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetch('/events')
    let { events } = await data.json();
    let allEvents = document.getElementById('all-events');
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        allEvents.innerHTML += createCard(event);
    }
})

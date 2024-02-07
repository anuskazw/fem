import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'azw-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

  htmlString: any;

  ngOnInit(): void {

    const searchBar = document.getElementById('searchBar');
    const filter = document.getElementById('filter');
    const eventList = document.getElementById('eventList');

    const events = [
      { name: 'Independencia de México', date: '1810-09-16' },
      { name: 'Revolución Francesa', date: '1789-07-14' },
      // Añade más eventos aquí
    ];

    const displayEvents = (events: any) => {
      const htmlString = events
        .map((event: any) => `<li>${event.name} - ${event.date}</li>`)
        .join('');
      this.htmlString = htmlString;
    };

    /* searchBar.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
      const filteredEvents = events.filter((event) => {
        return (
          event.name.toLowerCase().includes(searchString) ||
          event.date.includes(searchString)
        );
      });
      displayEvents(filteredEvents);
    }); */

    /* filter.addEventListener('change', (e) => {
      let sortedEvents;
      switch (e.target.value) {
        case 'alphabet':
          sortedEvents = [...events].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'date':
          sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case 'name':
          // Aquí podrías implementar otra lógica de ordenamiento si es necesario
          sortedEvents = [...events];
          break;
        default:
          sortedEvents = [...events];
      }
      displayEvents(sortedEvents);
    }); */

    displayEvents(events);


  }



}

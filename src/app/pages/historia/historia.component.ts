import { Component, OnInit } from '@angular/core';
// Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";

@Component({
  selector: 'azw-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const citiesRef = collection(db, "cities");


    // Create a query against the collection.
    // const q = query(citiesRef, where("state", "==", "CA"));
  }

}

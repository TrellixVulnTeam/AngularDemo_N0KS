import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carasoul-example',
  templateUrl: './carasoul-example.component.html',
  styleUrls: ['./carasoul-example.component.scss']
})
export class CarasoulExampleComponent implements OnInit {
  episodeDetail: any;
  constructor() { }

  ngOnInit(): void {
    this.episodeDetail = {
      id: 1,
      title: "An Exercise in Fatality",
      productionYear: "1974",
      synopsis: "A health club owner murders one of his franchisees. Lt. Columbo is on the case.",
      imageUrls: ["assets/photos/1.jpg", "assets/photos/2.jpg", "assets/photos/3.jpg"]
    };
  }

}

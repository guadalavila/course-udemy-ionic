import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data = [
    {
      name: 'primary',
      selected: true,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: false,
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClickCheckBox(selected: any) {
    console.log(selected);
  }

  verifyEvent() {
    console.log(this.data);
  }
}

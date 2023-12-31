import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {
  public isOutlined: boolean = true;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isOutlined = !this.isOutlined;
  }
}

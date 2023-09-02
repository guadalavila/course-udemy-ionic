import { Component, OnInit } from '@angular/core';
import { componentsMock } from 'src/app/utils/mocks';

export interface ItemComponent {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: ItemComponent[] = componentsMock;

  constructor() {}

  ngOnInit() {}
}

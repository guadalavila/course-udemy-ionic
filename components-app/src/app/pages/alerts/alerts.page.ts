import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  public user: User | undefined = undefined;
  constructor(
    private alertController: AlertController,
    private navController: NavController
  ) {}

  ngOnInit() {}

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => console.log('Cancelled'),
    },
    {
      text: 'No lo sé',
      role: 'cancel',
      handler: () => console.log('Cancelled'),
    },
    {
      text: 'Salir',
      role: 'confirm',
      handler: () => {
        console.log('Confirmed');
        this.navController.back();
      },
    },
  ];

  async showAlert() {
    const alert = await this.alertController.create({
      header: '¿Estas seguro de que quieres salir?',
      subHeader: 'Te recomiendo que no salgas de la alert',
      backdropDismiss: false,
      message: 'Si salis, no vas a poder estar actualizado',
      buttons: this.alertButtons,
    });
    await alert.present();
  }

  async showAlertWithInput() {
    const alert = await this.alertController.create({
      header: 'Formulario de inscripción',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ingrese el nombre',
        },
        {
          name: 'lastName',
          type: 'text',
          placeholder: 'Ingrese el apellido',
        },
        {
          name: 'url',
          value: 'https://ionicframework.com',
          type: 'url',
          placeholder: 'Ingrese la url',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (data) => {
            this.user = data;
          },
        },
      ],
    });
    await alert.present();
  }
}

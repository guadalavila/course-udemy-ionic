import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      subHeader: 'Selecciona una opción',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash-outline',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('u press delete');
          },
        },
        {
          text: 'Compartir',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('u press share');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('u press cancel');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}

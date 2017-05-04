import { Component } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import {Ng2SmartTableModule} from 'ng2-smart-table';

@Component({
  selector: 'data',
  templateUrl:'./data.html' ,
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      NOME: {
        title: 'NOME',
        filter: true,
      },
      name: {
        title: 'COGNOME',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
 contatti: {
        title: 'Tipo di Contatto',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Amici', title: 'Amici' },
              { value: 'Famiglia', title: 'Famiglia' },
              { value: 'Lavoro', title: 'Lavoro' },
              { value: 'Altro', title: 'Altro' },
            ],
          },
        },
      },
     
    },
  
};

}
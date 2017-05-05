import {Component} from "@angular/core"
import {Router} from '@angular/router';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {BasicExampleDataComponent} from './basic-example-data.component';

@Component({
  selector: 'rubrica',
  templateUrl: './rubrica.html',
  styleUrls: ['./rubrica.css']

})
export class BasicExampleComponent {


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


  data = [
    {
      NOME: 'Gianni',
      name: 'Rosso',
      email: 'Sincere@april.biz',
     contatti: 'Amici',

    },
    {
      NOME: 'Andrea',
      name: 'Verdi',
      contatti: 'Amici',
      email: 'Shanna@melissa.tv',
    },
    {
      NOME: 'Carlo',
      name: 'Gialli',
      contatti: 'Altro',
      email: 'Nathan@yesenia.net',
    },
    {
      NOME: 'Marco',
      name: 'Patricia Lebsack',
      contatti: 'Lavoro',
      email: 'Julianne.OConner@kory.org',
    },
    {
      NOME: 'Valentino',
      name: 'Chelsey Dietrich',
      contatti: 'Famiglia',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      NOME: 'Roberto',
      name: 'Mrs. Dennis Schulist',
      contatti: 'Famiglia',
      email: 'Karley_Dach@jasper.info',
    },
    {
      NOME: 'Carlo',
      name: 'Kurtis Weissnat',
      contatti: 'Lavoro',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      NOME: 'Mario',
      name: 'Nicholas Runolfsdottir V',
      contatti: 'Lavoro',
      email: 'Sherwood@rosamond.me',
    },
    {
      NOME: 'Veronica',
      name: 'Glenna Reichert',
      contatti: 'Famiglia',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      NOME: 'Carla',
      name: 'Clementina DuBuque',
      contatti: 'Lavoro',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      NOME: 'Andrea',
      name: 'Nicholas DuBuque',
      contatti: 'Famiglia',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];
}
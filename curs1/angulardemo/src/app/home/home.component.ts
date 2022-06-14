import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';

const Heroes=[
  {id:1, name: 'Superman'},
  {id:2, name: 'Batman'},
  {id:3, name: 'Batgirls'},
  {id:4, name: 'Robin'},
  {id:5, name: 'Flash'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eroi =Heroes;

  tittle: string = 'buna ce faci?';
  nume:string ='LinkAcademy';
  image: string = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/744/714/datas/original.jpg';
  user = {
    id: 1,
    nume: 'Ppopescu',
    prenume: 'Dan',
    mail: 'dsn@popescu.ro'
  }
showImage:boolean=true;
constructor ( private alertaService:AlertaService ){ }
  

  ngOnInit(): void {
    this.alertaService.showAlert('Salut Mihai ')
  }
  afiseazaImagine(){
    this.showImage=! this.showImage;
  }

}

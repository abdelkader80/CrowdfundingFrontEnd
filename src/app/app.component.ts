import { Component, OnInit } from '@angular/core';
import { Projet } from './models/projet';
import { ProjetService } from './services/projet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'machrou3i';
  projets : Projet[] = [];
  constructor(private projetService:ProjetService){}
  ngOnInit(): void {
    this.projetService.getprojets(0,0).subscribe(
      (res:any) => {
        this.projets = res._embedded.projets;
        // console.log("result:"+JSON.stringify(res._embedded.projets));
      }
    );
  }
}

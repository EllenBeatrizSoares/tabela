import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uninter';


  headers = ["Nome","RU","Curso","Nascimento"];

  alunos = [
    {
      "Nome": "Ellen Beatriz Soares",
      "RU": "3327534",
      "Curso":"Analise e Desenvolvimento de Sistemas",
     "Nascimento":"19/05/2001"
    },
    {
      "Nome": "Ana Carolina ",
      "RU": "080012",
      "Curso":"Engenharia de Software",
      "Nascimento":"15/06/1998"
    },
    {
      "Nome": "Bella ",
      "RU": "70002",
      "Curso":"Filosofia",
      "Nascimento":"02/02/2001"
    },
    {
      "Nome": "Rodrigo",
      "RU": "300289",
      "Curso":"Artes",
      "Nascimento":"06/08/1998"
    },
    {
      "Nome": "Ricardo",
      "RU": "020563",
      "Curso":"Direito",
      "Nascimento":"03/07/1997"
    }
  ];
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-big-auto',
  templateUrl: './some-big-auto.component.html',
  styleUrls: ['./some-big-auto.component.css']
})
export class SomeBigAutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgUrl = 'https://www.sciencedebate2008.com/wp-content/uploads/belaz-worlds-largest-dump-truck.jpg'
  title ='Самый большой автомобиль в мире установил рекорд Гиннесса';
  text ='Самый большой в мире автомобиль БелАЗ-75710 установил мировой рекорд. Белорусский полноприводный двухосный самосвал-гигант перевез по испытательному полигону груз весом в 503,5 тонны. Об этом сообщает агентство «Мир»';
}



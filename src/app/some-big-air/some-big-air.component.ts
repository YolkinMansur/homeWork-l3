import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-big-air',
  templateUrl: './some-big-air.component.html',
  styleUrls: ['./some-big-air.component.css']
})
export class SomeBigAirComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
title = 'Самый большой, самый мощный, самый тяжелый в мире. Таким был Советский самолет АН-225 «Мрия».'
text = 'Самолёт был спроектирован и построен в СССР в единственном экземпляре на Киевском механическом заводе (руководитель проекта — В. И. Толмачёв) в 1984—1988 годах[5][6]. Первый полёт был совершён 21 декабря 1988 года. Изначально было заложено две машины; только один экземпляр находился в лётном состоянии и эксплуатировался украинской компанией Antonov Airlines. В СССР имел бортовой номер СССР-82060, после распада СССР перешёл в собственность Украины и получил бортовой номер UR-82060. Второй экземпляр не достроен.'
imgUrl = 'https://cdnuploads.aa.com.tr/uploads/Contents/2016/05/10/thumbs_b_c_58320640c28147a5277880c1f4cb7887.jpg'
}

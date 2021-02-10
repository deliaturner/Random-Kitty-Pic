import { CatService } from './../cat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.css']
})
export class DisplayCatComponent implements OnInit {
  results: any;
  pic: string;
  firstCat: boolean = false;
  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }
  getPic() {
    this.catService.getCatPic().subscribe((data: any) => {
      this.results = data;
      this.pic = data[0].url;
      this.firstCat = true;
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  notFoundFullHeight: boolean = false;
  constructor(private _ActivatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    if (this._ActivatedRoute.snapshot.data[0]) {
      this.notFoundFullHeight = !this.notFoundFullHeight;
    }
  }

}

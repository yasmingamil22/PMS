import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {

  notFoundFullHeight: boolean = false;
  constructor(private _ActivatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    if (this._ActivatedRoute.snapshot.data[0]) {
      this.notFoundFullHeight = !this.notFoundFullHeight;
    }
  }

}

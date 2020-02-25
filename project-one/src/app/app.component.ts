import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private svc: GetdataService) {}

  title = 'project-one';

  public ngOnInit(): void {
    const obs: Observable <any> = this.svc.getSomeData();

    obs.subscribe(
      (data) => console.log(data)
    );

  }
}

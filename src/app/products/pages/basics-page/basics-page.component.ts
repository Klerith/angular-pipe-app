import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fErNAndo hErReRa';

  public customDate: Date = new Date();

}

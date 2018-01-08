import { routerTransition } from './common/animations';
import { NavigationService } from './common/navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition(),
  ]
})
export class AppComponent {
  title = 'app';

  constructor(
    private navigationService: NavigationService
  ) {
  }

  getRouteAnimation(outlet) {
    console.log('lastValue', this.navigationService.lastValue);
    console.log('newValue', this.navigationService.newValue);
    console.log('result', this.navigationService.animationValue);
    return this.navigationService.animationValue;
  }
}

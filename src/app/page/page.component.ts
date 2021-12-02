import {
  Component,
  Input
} from '@angular/core';
import {PageData} from '../app.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent {
  @Input() data: PageData;
}

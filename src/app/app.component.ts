import {
  Component,
  OnInit
} from '@angular/core';

type RequiredProps<TType extends object, TKeys extends keyof TType> = TType & Required<Pick<TType, TKeys>>;

export interface PageData {
  title: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageData?: PageData;

  async ngOnInit() {
    // ...loading data asynchronously...
    this.pageData = {
      title: 'Dynamic page title'
    }
  }

  isPageLoaded(): this is RequiredProps<AppComponent, 'pageData'> {
    return Boolean(this.pageData);
  }

  typeNarrowingWorksHere() {
    if (this.isPageLoaded()) {
      console.log(this.pageData.title);
    }
  }
}

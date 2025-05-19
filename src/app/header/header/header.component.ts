import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private translate: TranslateService) { }
  onChange(event: any) {
    console.log(event.target.value);
    this.translate.setDefaultLang(event.target.value);
    this.translate.use(event.target.value);
  }
  buttonClick(e: any) {
    console.log(e);
    if (e == "Jobs") {
      this.router.navigateByUrl('/jobs');
    } else if (e == "Orders") {
      this.router.navigateByUrl('/orders');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}

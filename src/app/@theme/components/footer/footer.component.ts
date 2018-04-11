import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by Kyle Burns with template by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2018</span>
    <div class="socials">
      <a href="https://github.com/kyleburns2" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/kyle-burns-333588123/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}

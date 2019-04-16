import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"> BeeLogger Administration <b><a href="https://github.com/mschlech/beelogger-admin" target="_blank">BeeLogger Team</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}

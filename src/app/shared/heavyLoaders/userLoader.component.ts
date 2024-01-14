import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-loaders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1> Hola Mundo</h1>`,
})
export class userLoaderComponent { }

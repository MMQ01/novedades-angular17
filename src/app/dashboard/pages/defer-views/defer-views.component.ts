import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavyLoaders/heavyLoadersSlow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersSlowComponent,
    TitleComponent
  ],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }

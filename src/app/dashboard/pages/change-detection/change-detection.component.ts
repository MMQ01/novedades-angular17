import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
})
export default class ChangeDetectionComponent {


  public currentFramework = computed(
    ()=> `Change detection - ${this.frameworkAsSignals().name}`
  )

  public frameworkAsSignals = signal(
    {
      name:'Angular',
      releaseDate: 2016
    }
  )


   frameworkAsProperties =
    {
      name:'Angular',
      releaseDate: 2016
    }


  constructor (){
    setTimeout(() => {

      console.log('Hecho');
      // this.frameworkAsProperties.name = 'React'
      this,this.frameworkAsSignals.update(value=>(
        {
          ...value,
          name:'React'
        }
      ))
      console.log(this.frameworkAsProperties);

    }, 3000);
  }


 }

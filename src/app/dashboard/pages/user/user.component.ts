import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '@interfaces/req-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute)
  public usersServices = inject(UsersService)


  public user= toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersServices.getUserById(id))
    )
  )

  public titleLabel = computed( ()=>{

    if (this.user()) {
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return 'Información del usuario'
  } );



 }

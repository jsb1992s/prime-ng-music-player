import { Component } from '@angular/core';
import { PlayerToolbarComponent } from '../../components/player-toolbar/player-toolbar.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from '@components/side-bar/side-bar.component';
import { PrimeNgModule } from 'app/shared/modules/primeng/primeng.module';
import { TrackMainComponent } from '@components/track-main/track-main.component';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [PlayerToolbarComponent, SideBarComponent, PrimeNgModule,FormsModule,TrackMainComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss'
})
export class TrackComponent {
  msg = '';

}

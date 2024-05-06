import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from 'app/shared/modules/primeng/primeng.module';

@Component({
  selector: 'track-main',
  standalone: true,
  imports: [PrimeNgModule,CommonModule],
  templateUrl: './track-main.component.html',
  styleUrl: './track-main.component.scss'
})
export class TrackMainComponent {

}

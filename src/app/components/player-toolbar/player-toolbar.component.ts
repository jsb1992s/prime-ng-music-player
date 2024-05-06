import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeNgModule } from 'app/shared/modules/primeng/primeng.module';

@Component({
  selector: 'player-toolbar',
  standalone: true,
  imports: [PrimeNgModule,CommonModule],
  templateUrl: './player-toolbar.component.html',
  styleUrl: './player-toolbar.component.scss',
})
export class PlayerToolbarComponent implements OnInit {
  value: number = 75;
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from 'app/shared/modules/primeng/primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Home',
            escape: false,
            icon: 'pi pi-home',
            iconClass: 'text-xl',
          },
          {
            label: 'Search',
            escape: true,
            icon: 'pi pi-search',
            iconClass: 'text-xl',
          },
          {
            label: 'Liked Song',
            escape: false,
            icon: 'pi pi-heart-fill',
            iconClass: 'text-xl',
          },
          {
            label: 'Radio',
            escape: false,
            icon: 'pi pi-wifi',
            iconClass: 'text-xl',
          },
          {
            label: 'Podcast',
            escape: false,
            icon: 'pi pi-microphone',
            iconClass: 'text-xl',
          },
        ],
      },
      {
        label: 'Library',
        items: [
          {
            label: 'Artists',
            escape: false,
            icon: 'pi pi-user',
            iconClass: 'text-xl text-500',
          },
          {
            label: 'Songs',
            icon: 'pi pi-tiktok',
            url: 'http://angular.io',
            // badge: '2',
            badgeSeverity: 'success',
          },
          {
            label: 'Albums',
            escape: false,
            icon: 'pi pi-images',
            iconClass: 'text-xl',
          },
          {
            label: 'PlayLists',
            escape: false,
            icon: 'pi pi-headphones',
            iconClass: 'text-xl',
          },
          {
            label: 'New PlayLists',
            escape: false,
            icon: 'pi pi-file-plus',
            iconClass: 'text-xl',
          },
        ],
      },
    ];
  }
}

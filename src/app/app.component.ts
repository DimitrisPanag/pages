import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At The Beach!',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Skydiving',
      url: 'https://images.unsplash.com/photo-1521673252667-e05da380b252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNreWRpdmluZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Hiking the Alps',
      url: 'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhpa2luZyUyMHRoZSUyMGFscHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Going on a Cruise',
      url: 'https://images.unsplash.com/photo-1516495312540-a148643b22d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29pbmclMjBvbiUyMGElMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At The Beach!',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Skydiving',
      url: 'https://images.unsplash.com/photo-1521673252667-e05da380b252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNreWRpdmluZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Hiking the Alps',
      url: 'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhpa2luZyUyMHRoZSUyMGFscHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Going on a Cruise',
      url: 'https://images.unsplash.com/photo-1516495312540-a148643b22d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29pbmclMjBvbiUyMGElMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At The Beach!',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Skydiving',
      url: 'https://images.unsplash.com/photo-1521673252667-e05da380b252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNreWRpdmluZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Hiking the Alps',
      url: 'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhpa2luZyUyMHRoZSUyMGFscHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Going on a Cruise',
      url: 'https://images.unsplash.com/photo-1516495312540-a148643b22d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29pbmclMjBvbiUyMGElMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D'
    }
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}

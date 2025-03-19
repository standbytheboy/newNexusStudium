import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  @ViewChild('cards', { static: true }) cards!: ElementRef<HTMLElement>;
  @ViewChild('left', { static: true }) leftBtn!: ElementRef<HTMLElement>;
  @ViewChild('right', { static: true }) rightBtn!: ElementRef<HTMLElement>;

  idx: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.startInterval();
    this.leftBtn.nativeElement.addEventListener('click', () => this.onLeftClick());
    this.rightBtn.nativeElement.addEventListener('click', () => this.onRightClick());
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.idx++;
      this.changeTestimonial();
    }, 10000);
  }

  clearInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeTestimonial(): void {
    const cards = this.cards.nativeElement.querySelectorAll('.card');
    if (this.idx > cards.length - 1) {
      this.idx = 0;
    } else if (this.idx < 0) {
      this.idx = cards.length - 1;
    }

    this.cards.nativeElement.style.transform = `translateX(${-this.idx * 16.8}%)`;
  }

  resetInterval(): void {
    this.clearInterval();
    this.startInterval();
  }

  onRightClick(): void {
    this.idx++;
    this.changeTestimonial();
    this.resetInterval();
  }

  onLeftClick(): void {
    this.idx--;
    this.changeTestimonial();
    this.resetInterval();
  }
}

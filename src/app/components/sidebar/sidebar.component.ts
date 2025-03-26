import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('circle') circle!: ElementRef;
  @ViewChild('valor') valor!: ElementRef;
  @ViewChild('hours') hours!: ElementRef;
  @ViewChild('total') total!: ElementRef;

  valorInicial = 0;
  valorFinal = 80;
  

  ngAfterViewInit() {
    const progresso = setInterval(() => {
      this.valorInicial++;
      this.valor.nativeElement.innerHTML = `${this.total.nativeElement.textContent}<br>${this.hours.nativeElement.textContent}`;
      this.circle.nativeElement.style.background = `conic-gradient(#E8F4FC ${this.valorInicial * 3.6}deg, #1E4C73 0deg)`;
      
      this.valor.nativeElement.style.fontSize = "20px"
      if (this.valorInicial === this.valorFinal) {
        clearInterval(progresso);
      }
    }, 50);
  }
}

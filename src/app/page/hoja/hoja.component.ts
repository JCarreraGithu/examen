import { Component } from '@angular/core';

@Component({
  selector: 'app-hoja',
  templateUrl: './hoja.component.html',
  styleUrls: ['./hoja.component.css']
})
export class HojaComponent {

  openModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01") as HTMLImageElement;
    const img = document.querySelector(".cv-photo") as HTMLImageElement;
    if (modal && modalImg && img) {
      modal.style.display = "block";
      modalImg.src = img.src;
    }
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }
}


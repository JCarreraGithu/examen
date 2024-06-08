import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  openModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01") as HTMLImageElement;
    const img = document.querySelector(".profile-photo") as HTMLImageElement;
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

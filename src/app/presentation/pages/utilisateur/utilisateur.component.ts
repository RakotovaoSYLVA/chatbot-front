import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
  loading = true;
  utilisateurs = [];
  // ngOnInit() {
  //   this.utilisateurService.getAll().subscribe({
  //     next: (res) => {
  //       this.utilisateurs = res;
  //       this.loading = false;
  //     },
  //     error: () => {
  //       this.loading = false;
  //       // Gère l'erreur ici
  //     }
  //   });
}

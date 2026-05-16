import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana García', email: 'ana@example.com', rol: 'Admin' },
    { id: 2, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Editor' },
    { id: 3, nombre: 'María Pérez', email: 'maria@example.com', rol: 'Viewer' },
  ];

  obtenerUsuarios(): Usuario[] {
    return this.usuarios;
  }
}

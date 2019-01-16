import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  // Handle data
  pets: Pet[];

  constructor() {
    this.pets = [
      {id: 1, name: 'gh'},
      {id: 2, name: 'tde'}];
  }

  getPets(): Pet[] {
    return this.pets;
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
  }
}

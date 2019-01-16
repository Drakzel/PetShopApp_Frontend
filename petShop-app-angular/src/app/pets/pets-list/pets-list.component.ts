import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetService} from '../../shared/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = [];
  pet: Pet = {id: 3, name: 'hhh'};

  constructor(private petService: PetService) { }

  ngOnInit() {
    // Use the data
    this.pets = this.petService.getPets();
  }

  addPet() {
    this.petService.addPet(this.pet);
  }


}

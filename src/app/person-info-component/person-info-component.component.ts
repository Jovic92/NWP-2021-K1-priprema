import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-info-component',
  templateUrl: './person-info-component.component.html',
  styleUrls: ['./person-info-component.component.css']
})
export class PersonInfoComponentComponent implements OnInit {

  person: Person;

  constructor() { }

  ngOnInit(): void {
  }


  enterInfo(personForm) {
    this.person = personForm.value;
    this.person.skills = []
    for (let i = 0; i < 3; i++) {
      this.person.skills.push({ "name": personForm.value["skills[" + i + "].name"], "knowledge": personForm.value["skills[" + i + "].knowledge"] })
    }
    console.log(this.person)
  }
}

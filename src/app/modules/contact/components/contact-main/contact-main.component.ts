import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css'],
})
export class ContactMainComponent implements OnInit {
  toggleModal = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.toggleModal = !this.toggleModal;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  email = 'shaheercp890@gmail.com';
  phone = '7034140083';
  linkedin = 'https://www.linkedin.com/in/muhammedshaheercp/';
  github = 'https://github.com/mhdshaheer';
  leetcode = 'https://leetcode.com/u/muhammed_shaheer_cp/';
}

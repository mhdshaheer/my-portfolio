import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Software Engineer (MEAN Stack Developer)',
      company: 'Brototype',
      period: 'Present',
      description: 'Developing industry-standard, real-world web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Focusing on building scalable systems, clean code architecture, and performance optimization.'
    }
  ];

  education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'APJ Abdul Kalam Technological University',
      year: '2020 - 2024',
      description: 'Focused on core computer science principle, including Data Structures, Algorithms, and Full-Stack Web Development.'
    }
  ];
}

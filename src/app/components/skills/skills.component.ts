import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      icon: 'code',
      skills: ['Angular', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      name: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Express.js']
    },
    {
      name: 'Languages',
      icon: 'terminal',
      skills: ['JavaScript', 'TypeScript']
    },
    {
      name: 'Databases',
      icon: 'database',
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      name: 'Integrations',
      icon: 'cpu',
      skills: ['Razorpay', 'Stripe', 'Nodemailer', 'Multer', 'Cloudinary', 'Socket.IO', 'WebRTC']
    },
    {
      name: 'Deployment',
      icon: 'cloud',
      skills: ['AWS', 'Nginx', 'Vercel', 'Render', 'Docker', 'CI/CD Pipelines']
    },
    {
      name: 'Tools',
      icon: 'tool',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code']
    },
    {
      name: 'Core Concepts',
      icon: 'book',
      skills: ['Data Structures & Algorithms', 'SOLID Principles', 'Clean Architecture']
    }
  ];
}

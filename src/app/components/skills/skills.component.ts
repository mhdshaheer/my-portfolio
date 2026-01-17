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
      icon: 'code', // Using simple text or svg later, but for now class names for fontawesome (user might need to add FA)
      skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'RxJS', 'JSON']
    },
    {
      name: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Javascript', 'SSR']
    },
    {
      name: 'Database',
      icon: 'database',
      skills: ['MongoDB', 'Mongoose', 'NoSQL']
    },
    {
      name: 'Tools & DevOps',
      icon: 'terminal',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'NPM']
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent {
  projects = [
    {
      title: 'ZenFit – Online Fitness Platform',
      description: 'A comprehensive full-stack fitness platform with fitness plans, trainer bookings, role-based access control, and a responsive dashboard.',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      image: 'linear-gradient(135deg, #1e293b 0%, #0ea5e9 100%)',
      githubLink: 'https://github.com/mhdshaheer/ZenFit-fitness',
      demoLink: '#'
    },
    {
      title: 'Zuka Ecommerce',
      description: 'A robust e-commerce web application with MVC architecture, category management, cart system, and Razorpay integration.',
      tags: ['Node.js', 'Express', 'MongoDB', 'SCSS'],
      image: 'linear-gradient(135deg, #1e293b 0%, #8b5cf6 100%)',
      githubLink: 'https://github.com/mhdshaheer/zuka-ecommerce',
      demoLink: '#'
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'A sleek modern mobile shopping application focusing on seamless user experience and smooth checkout process.',
      tags: ['Flutter', 'Dart'],
      image: 'linear-gradient(135deg, #1e293b 0%, #ec4899 100%)',
      githubLink: 'https://github.com/mhdshaheer/E_CommerceApp',
      demoLink: '#'
    },
    {
      title: 'Tesla Homepage Clone',
      description: 'A high-fidelity recreations of the Tesla homepage demonstrating expertise in modern front-end layouts and CSS animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'linear-gradient(135deg, #1e293b 0%, #10b981 100%)',
      githubLink: 'https://github.com/mhdshaheer/tesla-clone',
      demoLink: '#'
    }
  ];
}

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
      title: 'ZenFit',
      description: 'A comprehensive full-stack fitness platform with fitness plans, trainer bookings, role-based access control, and a responsive dashboard.',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      image: 'assets/images/project-images/zenfit.png',
      githubLink: 'https://github.com/mhdshaheer/ZenFit-fitness',
      demoLink: 'https://zenfit.space'
    },
    {
      title: 'Zuka Sports',
      description: 'A premium sports equipment e-commerce destination with high-performance gear, secure payments via Razorpay, and a seamless shopping experience.',
      tags: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      image: 'assets/images/project-images/zukasports.png',
      githubLink: 'https://github.com/mhdshaheer/zuka-ecommerce',
      demoLink: 'https://zuka.zenfit.space'
    },
    {
      title: 'Blog Space',
      description: 'A minimalist and intuitive blogging platform designed for content creators, featuring Markdown support, category filtering, and responsive reading experience.',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      image: 'assets/images/project-images/blogspace.png',
      githubLink: '#',
      demoLink: '#'
    },
    {
      title: 'Bit Core',
      description: 'A robust authentication and user management system focusing on security, featuring OTP verification, secure session handling, and advanced user roles.',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Node.js'],
      image: 'assets/images/project-images/bitcore.png',
      githubLink: '#',
      demoLink: 'https://bitcore.zenfit.space'
    }
  ];
}

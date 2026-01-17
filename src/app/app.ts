import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.html',
  styles: []
})
export class App implements OnInit {
  title = 'MEAN Stack Developer Portfolio';
  currentYear = new Date().getFullYear();

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTags([
      { name: 'description', content: 'Portfolio of a passionate MEAN Stack Developer specializing in Angular, Node.js, and MongoDB.' },
      { name: 'keywords', content: 'MEAN Stack, Angular, Node.js, Express, MongoDB, Web Developer, Portfolio' },
      { name: 'author', content: 'Muhammed Shaheer C P' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
  }
}

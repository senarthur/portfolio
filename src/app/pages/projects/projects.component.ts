import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { IProject } from '../../model/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: IProject[] = [
    {
      title: 'Landing-Page-Adidas',
      date: 'Junho/2022',
      link: 'https://github.com/senarthur/Landing-Page-Adidas'
    }, 
    {
      title: 'Horizon-Game_Landing-Page',
      date: 'Agosto/2022',
      link: 'https://github.com/senarthur/Horizon-Game_Landing-Page'
    },
    {
      title: 'Jogo-da-Memoria',
      date: 'Julho/2023',
      link: 'https://github.com/senarthur/Jogo-da-Memoria'
    },
    {
      title: 'Java-CRUD',
      date: 'Julho/2023',
      link: 'https://github.com/senarthur/Java-CRUD'
    },
    {
      title: 'Listas',
      date: 'Julho/2023',
      link: 'https://github.com/senarthur/Listas'
    },
    {
      title: 'ToDoList-React',
      date: 'Julho/2023',
      link: 'https://github.com/senarthur/ToDoList-React'
    },
    {
      title: 'snake-game',
      date: 'Agosto/2023',
      link: 'https://github.com/senarthur/snake-game'
    },
    {
      title: 'dashboard-js',
      date: 'Agosto/2023',
      link: 'https://github.com/senarthur/dashboard-js'
    },
    {
      title: 'chess-system-java',
      date: 'Fevereiro/2024',
      link: 'https://github.com/senarthur/chess-system-java'
    },
    {
      title: 'demo-dao-jdbc',
      date: 'Março/2024',
      link: 'https://github.com/senarthur/demo-dao-jdbc'
    },
    {
      title: 'animals-adoption-project',
      date: 'Maio/2024',
      link: 'https://github.com/senarthur/animals-adoption-project'
    },
    {
      title: 'pokedex-atividade',
      date: 'Maio/2024',
      link: 'https://github.com/senarthur/pokedex-atividade'
    },
    {
      title: 'lista-tarefa-angular',
      date: 'Maio/2024',
      link: 'https://github.com/senarthur/lista-tarefa-angular'
    },
    {
      title: 'springboot-project-order',
      date: 'Maio/2024',
      link: 'https://github.com/senarthur/springboot-project-order'
    },
  ]

  filteredProjects: IProject[] = this.projects;
  
  constructor() { }

  search(event: any) {
    let word = event.target.value.toUpperCase();
    
    this.filteredProjects = this.projects.filter(project => {
      let name = project.title.toUpperCase();
      return name.includes(word);
    })
  }

  reverse(event: any) {
    const element = event.target.parentNode;

    element.classList.toggle('activated');
    this.filteredProjects = this.filteredProjects.reverse();
    
  }
}

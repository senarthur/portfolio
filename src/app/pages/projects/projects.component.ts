import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { GitHubProjectsModelToIProject, IGitHubProjectsModel, IProject } from '../../model/project.model';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  private readonly URL_REPOS: string = 'https://api.github.com/users/senarthur/repos';
  gitHubProjects: IProject[] = [];
  
  projects: IProject[] = [
    
  ]

  filteredProjects: IProject[] = this.projects;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.URL_REPOS).subscribe(response => {
       let projects = response as IGitHubProjectsModel[];
       projects.forEach(project => {
        this.projects.push(GitHubProjectsModelToIProject(project));
       })
     })
  }

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

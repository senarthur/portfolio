import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubProjectsModelToIProject, IGitHubProjectsModel, IProject } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly URL_REPOS: string = 'https://api.github.com/users/senarthur/repos';
  gitHubProjects: IProject[] = [];
  
  constructor(private http: HttpClient) { }

  getAllProjects() {
    this.http.get(this.URL_REPOS).subscribe(response => {
      return response as IGitHubProjectsModel[];
     })
  }
}

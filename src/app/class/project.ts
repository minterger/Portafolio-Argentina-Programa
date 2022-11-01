export class Project {
  id: number;
  name: String;
  imgUrl: string;
  description: string;
  linkProject: string;
  linkGithub: string;
  tecnologies: [string];

  constructor(
    id: number,
    name: string,
    imgUrl: string,
    description: string,
    linkProject: string,
    linkGithub: string,
    tecnologies: [string]
  ) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.description = description;
    this.linkProject = linkProject;
    this.linkGithub = linkGithub;
    this.tecnologies = tecnologies;
  }
}

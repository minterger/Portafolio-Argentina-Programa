export class Skill {
  id: number;
  name: string;
  type: string;
  imgUrl: string;

  constructor(id: number, name: string, type: string, imgUrl: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
  }
}

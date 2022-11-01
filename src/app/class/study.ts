export class Study {
  name: string;
  imgUrl: string;
  title: string;
  modality: string;

  constructor(name: string, imgUrl: string, title: string, modality: string) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.title = title;
    this.modality = modality;
  }
}

export class Player {
  public id: string;
  public name: string;
  public first_name: string;
  public last_name: string;
  public country: { name: string; code: string };
  public images: { width: number; height: number; url: string }[];
  public position: string;
  public number: number;
  public birth_date: string;
  public age: number;
  public height: number;
  public weight: number;

  public starter: boolean;
  public pitch_position: number;

  public selected: boolean;

  constructor(
    id: string,
    name: string,
    first_name: string,
    last_name: string,
    country: { name: string; code: string },
    images: { width: number; height: number; url: string }[],
    position: string,
    number: number,
    birth_date: string,
    age: number,
    height: number,
    weight: number
  ) {
    this.id = id;
    this.name = name;
    this.first_name = first_name;
    this.last_name = last_name;
    this.country = country;
    this.images = images;
    this.position = position;
    this.number = number;
    this.birth_date = birth_date;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.starter = false;
    this.pitch_position = null;
    this.selected = false;
  }
}

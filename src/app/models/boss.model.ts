export class Bosses {
  id?: string;
  name: string;
  picture: string;
  jeu: string;
  hp: number;
  ame: number;

  constructor() {
    this.name = '';
    this.picture = '';
    this.jeu = '';
    this.hp = 0;
    this.ame = 0;
  }
}

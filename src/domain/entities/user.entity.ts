export class User {
  id: string;
  name: string;

  private constructor(name: string, id?: string) {
    this.name = name;
    this.id = id;
  }

  static create(name: string, id?: string) {
    return new User(name, id);
  }
}

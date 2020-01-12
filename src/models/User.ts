export interface Exercise {
  _id: string;
  number: number;
  exercise: string;
  weight: number;
  repetitions: number;
  time: number;
  obs: string;
}

export interface Training {
  _id: string;
  name: string;
  create_at: string;
  exercises: Exercise[];
}

export interface Info {
  name: string;
}

class User {
  private __id: string = '';
  private _username: string = '';
  private _info!: Info;
  private _create_at: string = '';
  private _perfil: string = '';
  private _trainings: Training[] = [];

  public get _id(): string {
    return this.__id;
  }
  public set _id(value: string) {
    this.__id = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get info(): Info {
    return this._info;
  }
  public set info(value: Info) {
    this._info = value;
  }

  public get create_at(): string {
    return this._create_at;
  }
  public set create_at(value: string) {
    this._create_at = value;
  }

  public get perfil(): string {
    return this._perfil;
  }
  public set perfil(value: string) {
    this._perfil = value;
  }

  public get trainings(): Training[] {
    return this._trainings;
  }
  public set trainings(value: Training[]) {
    this._trainings = value;
  }
} // Fim da classe

export default User;

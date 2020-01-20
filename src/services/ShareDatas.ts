import User, {Training} from 'models/User';

class ShareDatas {
  private static instance: ShareDatas;

  private _id: string = '';
  private _idTraining: string = '';

  private constructor() {}

  public static getInstance(): ShareDatas {
    if (!ShareDatas.instance) {
      ShareDatas.instance = new ShareDatas();
    }

    return ShareDatas.instance;
  }

  public set id(value: string) {
    this._id = value;
  }

  public set idTraining(value: string) {
    this._idTraining = value;
  }

  public getTraining(users: User[]): Training | undefined {
    return this.getUser(users)?.trainings.filter(training => training._id === this._idTraining)
    .pop();
  }

  public getUser(users: User[]): User | undefined {
    return users.filter(user => user._id === this._id).pop();
  }

  public userRemoveSelected() {
    this._id = '';
  }

  public trainingRemoveSelected() {
    this._idTraining = '';
  }
}

export default ShareDatas;

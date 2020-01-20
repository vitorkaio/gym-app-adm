import User from 'models/User';

class ShareDatas {
  private static instance: ShareDatas;

  private _id: string = '';

  private constructor() {}

  public static getInstance(): ShareDatas {
    if (!ShareDatas.instance) {
      ShareDatas.instance = new ShareDatas();
    }

    return ShareDatas.instance;
  }

  public getUser(users: User[]): User | undefined {
    return users.filter(user => user._id === this._id).pop();
  }
  public set id(value: string) {
    this._id = value;
  }
  public userRemoveSelected() {
    this._id = '';
  }
}

export default ShareDatas;

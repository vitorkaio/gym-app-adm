import User from 'models/User';

class ShareDatas {
  private static instance: ShareDatas;

  private _userSelected: User = new User();

  private constructor() {}

  public static getInstance(): ShareDatas {
    if (!ShareDatas.instance) {
      ShareDatas.instance = new ShareDatas();
    }

    return ShareDatas.instance;
  }

  public get userSelected(): User {
    return this._userSelected;
  }
  public set userSelected(value: User) {
    this._userSelected = value;
  }
  public userRemoveSelected() {
    this._userSelected = new User();
  }
}

export default ShareDatas;

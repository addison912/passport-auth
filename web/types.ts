export interface IPost {
  id: number;
  title: string;
  img: string;
  desc: string;
  longDesc: string;
}

interface IUserPhoto {
  value: string;
}
export interface IUser {
  id: string;
  displayName: string;
  name?: {
    familyName: string;
    givenName: string;
  };
  photos: IUserPhoto[];
  provider: string;
}

export interface IUserResponse extends Response {
  success: boolean;
  message: string;
  user?: IUser;
}

export interface User {
  _id: string;
  type: string;
  name: string;
  email: string;
}

export enum USER_TYPE {
  COLLABORATOR = 'collaborator',
  CUSTOMER = 'customer',
}

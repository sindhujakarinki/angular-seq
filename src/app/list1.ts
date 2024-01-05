export interface List {
  id: number;
  name: string;
  // other shared properties
}

export class List1 implements List {
  constructor(
    public id: number,
    public name: string,
    public products: any[] = []
  ) {}
}

export class Property {
    constructor(
      public title: string,
      public category: string,
      public surface: string,
      public rooms: string,
      public price: string,
      public photos: any[],
      public description ?: string ) {}
}

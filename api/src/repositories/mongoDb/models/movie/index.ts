import BaseModel from "../BaseModel"

export interface i_movies {
  title: string
  banner: string
  description: string
  director: string
  producer: string
}

export class Movies extends BaseModel {
  public schema = new this.dataBase.Schema({
    title: 'string',
    banner: 'string',
    description: 'string',
    director: 'string',
    producer: 'string'
  });

  public model = this.dataBase.model('Movies', this.schema)
}
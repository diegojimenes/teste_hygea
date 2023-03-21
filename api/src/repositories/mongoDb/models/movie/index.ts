import BaseModel from "../BaseModel"

export interface i_movies {
  title: string
  banner: string
  description: string
  director: string
  producer: string
  average: number
  providers: string
  id?: string
}

export class Movies extends BaseModel {
  public schema = new this.dataBase.Schema({
    title: 'string',
    banner: 'string',
    description: 'string',
    director: 'string',
    producer: 'string',
    average: 'number',
    providers: 'string',
    id: { type: 'string', unique: true }
  });

  public model = this.dataBase.model('Movies', this.schema)

  public query = this.model
}
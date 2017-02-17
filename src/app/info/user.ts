/**
 * Created by KyleW on 2017-02-16.
 */
export class User {
  _id?: string;
  character_name: string;
  info:{
    class: string;
    background: string;
    level: number;
    race: string;
    alignment: string;
    experience: number;
  }
}

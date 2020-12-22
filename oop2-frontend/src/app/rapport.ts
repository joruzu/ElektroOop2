import {Student} from "./student";
import {Vak} from "./vak";

export class Rapport {
  rapport_id: number;
  student: Student;
  vak: Vak;
  datum: string;
  cijfer: number;
}

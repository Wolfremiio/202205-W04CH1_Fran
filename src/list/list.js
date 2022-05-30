import { Gentleman } from '../component/Gentleman/gentleman';
import { MENS } from '../models/gentlemen';

export function List() {
  return (
    <ul className="gentlemen">
      {MENS.map((element) => (
        <Card person={element} key={element.id}></Card>
      ))}
      ;
    </ul>
  );
}

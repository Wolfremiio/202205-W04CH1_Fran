import { Button } from '../Button/button';
import { buttonX } from '../Button/buttonX';

export function Gentleman({ gentleman }) {
  return (
    <>
      <li className="gentleman">
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={'./img/' + gentleman.picture}
            alt={gentleman.alternativeText}
          />
          <span className="gentleman__initial">F</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{gentleman.name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              {gentleman.profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span>{' '}
              {gentleman.status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span>{' '}
              {gentleman.twitter}
            </li>
          </ul>
        </div>
        <buttonX></buttonX>
        <button id={gentleman.id}></button>
      </li>
      ;
    </>
  );
}

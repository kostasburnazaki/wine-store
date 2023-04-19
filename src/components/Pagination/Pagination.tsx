import React, {
  Dispatch,
  FC,
  SetStateAction
} from "react";
import classNames from 'classnames';

type Props = {
  itemsPerSlide: number,
  totalSlides: number,
  paginate: Dispatch<SetStateAction<number>>,
  currentSlide: number,
}


export const Pagination: FC<Props> = ({
  itemsPerSlide,
  totalSlides,
  paginate,
  currentSlide,
}) => {
  const slideNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSlides / itemsPerSlide); i++) {
    slideNumbers.push(i)
  }

  return (
    <ul className="preview__pagination">
      {slideNumbers.map(slideNumber => (
        <li key={slideNumber}>
          <a
            className={classNames('slide-link',
              { 'is-current': slideNumber === currentSlide })}
            onClick={(e) => {
              e.preventDefault();
              paginate(slideNumber);
            }}
            href="!#">
            {slideNumber}
          </a>
        </li>
      ))}
    </ul>
  )
}
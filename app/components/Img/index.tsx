import * as React from 'react';

interface Props {
  src: string;
  alt?: string;
  className?: string;
}
function Img(props: Props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default Img;

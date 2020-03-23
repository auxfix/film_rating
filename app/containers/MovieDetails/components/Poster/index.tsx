import * as React from 'react';
import Img from './Img';
import NoImage from './NoImage';
import messages from './messages';
import { FormattedMessage } from 'react-intl';


interface Props {
  src: string;
}
function Poster(props: Props) {
  const { src } = props;
  return (
    !!src ? (<Img src={props.src} />) :
      (
        <NoImage>
          <FormattedMessage {...messages.noPosterImage} />
        </NoImage>
      )
  );
}

export default Poster;

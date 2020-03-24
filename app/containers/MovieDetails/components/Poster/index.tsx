import React, { useState } from 'react';
import Img from './Img';
import NoImage from './NoImage';
import ImgWrapper from './ImgWrapper';
import NoImageWrapper from './NoImageWrapper';
import messages from './messages';
import { colors } from 'styles/vars';
import CircleLoader from 'react-spinners/CircleLoader';
import { FormattedMessage } from 'react-intl';

function ImgWithLoading(props: { src: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <ImgWrapper>
      <Img src={props.src} onLoad={() => setLoading(false)} />
      {loading && (
        <NoImageWrapper>
          <CircleLoader size={90} color={colors.blue} loading={true} />
        </NoImageWrapper>
      )}
    </ImgWrapper>
  );
}

interface Props {
  src: string;
}
function Poster(props: Props) {
  const { src } = props;
  return src !== 'N/A' ? (
    <ImgWithLoading src={src} />
  ) : (
    <NoImage>
      <FormattedMessage {...messages.noPosterImage} />
    </NoImage>
  );
}

export default Poster;

import React from 'react';
import { render } from '@testing-library/react';

import Detail from '../index';

const renderComponent = (props: any = {}) => {
  const utils = render(<Detail {...props} />);
  const div = utils.container.querySelector('div');
  return { ...utils, div };
};

describe('<Detail />', () => {
  it('should render right label', () => {
    const tstLabel = 'label_tst';

    const { div } = renderComponent({
      label: tstLabel,
      detail: '_',
    });

    expect(div).toHaveTextContent(tstLabel);
  });
  it('should render right detail', () => {
    const tstDetail = 'detail_tst';

    const { div } = renderComponent({
      label: '_',
      detail: tstDetail,
    });

    expect(div).toHaveTextContent(tstDetail);
  });
});

import React from 'react';
import ReactPaginate from 'react-paginate';
import './paging-styles.css';

export interface Props {
  pageCount: number;
  onPageChange: (page: number) => void;
  marginPagesDisplayed: number;
  pageRangeDisplayed: number;
}

function Pagination(props: Props) {
  const {
    pageCount,
    onPageChange,
    marginPagesDisplayed,
    pageRangeDisplayed,
  } = props;

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={data => onPageChange(data.selected + 1)}
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-class'}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  );
}

export default Pagination;

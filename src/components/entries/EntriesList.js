import React, { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { Row } from "react-bootstrap";
import { useGetEntriesQuery } from "../../features/apis/entriesApi";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import EntriesItem from "./EntriesItem";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const EntriesList = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetEntriesQuery();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 24;

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.entries.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (isSuccess) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.entries.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.entries.length / itemsPerPage));
    }
  }, [itemOffset, isSuccess, data]);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error?.error} />;

  return (
    <>
      <Row>
        {currentItems?.map((entry) => {
          return <EntriesItem key={uuid4()} entry={entry} />;
        })}
      </Row>

      <ReactPaginate
        nextLabel={<MdKeyboardArrowRight />}
        previousLabel={<MdKeyboardArrowLeft />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default EntriesList;

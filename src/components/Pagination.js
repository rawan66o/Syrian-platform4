import React from "react";
import ReactPaginate from "react-paginate";
import "../assets/styles/pagination.css";

function Pagination() {
  const isMobile = window.innerWidth < 768;
  const handlePageClick = (data) => {
    let selectedPage = data.selected;
    console.log("الصفحة المختارة:", selectedPage + 1);
  };
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={10} // عدد الصفحات الكلي (لاحقاً سيأتي من الـ API)
        // في الموبايل نعرض رقمين فقط حول الصفحة الحالية، في الديسكتوب نعرض 3
        pageRangeDisplayed={isMobile ? 1 : 3}
        marginPagesDisplayed={isMobile ? 1 : 2}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item break"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Pagination;

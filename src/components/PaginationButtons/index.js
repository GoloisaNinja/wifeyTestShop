import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../Button";
import { PaginationButtonsWrapper } from "./styles";

export function PaginationButtons({
  page,
  totalPages,
  handlePageForward,
  handlePageBack,
}) {
  const handleBack = () => {
    handlePageBack();
  };
  const handleForward = () => {
    handlePageForward();
  };
  return (
    <PaginationButtonsWrapper>
      <Button inverse="true" onClick={handleBack} disabled={page === 1}>
        <FaChevronLeft />
      </Button>
      <Button
        inverse="true"
        onClick={handleForward}
        disabled={page === totalPages}
      >
        <FaChevronRight />
      </Button>
    </PaginationButtonsWrapper>
  );
}

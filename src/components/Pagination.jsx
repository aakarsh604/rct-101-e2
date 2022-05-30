import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const Pagination = ({ page, limit, setpage, total, setlimit }) => {
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() => setpage(1)}>
        First
      </Button>
      <Button
        data-cy="pagination-previous-button"
        onClick={() => {
          if (page > 1) {
            setpage(page-1);
          }
        }}
      >
        Previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setlimit(+e.target.value)}
      >
        <option data-cy="pagination-limit-3" value="3">
          3
        </option>
        <option data-cy="pagination-limit-6" value="6">
          6
        </option>
        <option data-cy="pagination-limit-9" value="9">
          9
        </option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        onClick={() => {
          if (page*limit < total) {
            setpage(page + 1);
          }
        }}
      >
        Next
      </Button>
      <Button
        data-cy="pagination-last-button"
        onClick={() => setpage(total / limit)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;

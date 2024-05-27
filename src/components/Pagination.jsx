import { HStack, Button } from "@chakra-ui/react";

const Pagination = ({ page, setPage, hasNextPage }) => {
  return (
    <HStack spacing={4} justify="center" mt={8}>
      <Button
        onClick={() => setPage(page - 1)}
        isDisabled={page === 1}
      >
        Previous
      </Button>
      <Button
        onClick={() => setPage(page + 1)}
        isDisabled={!hasNextPage}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
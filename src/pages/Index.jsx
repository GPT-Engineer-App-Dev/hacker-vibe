import { Box, Container, Flex, Link, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const stories = [
  { id: 1, title: "Story 1", points: 100, user: "user1", time: "2 hours ago" },
  { id: 2, title: "Story 2", points: 200, user: "user2", time: "3 hours ago" },
  { id: 3, title: "Story 3", points: 300, user: "user3", time: "4 hours ago" },
  // Add more stories as needed
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 10;
  const totalPages = Math.ceil(stories.length / storiesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedStories = stories.slice(
    (currentPage - 1) * storiesPerPage,
    currentPage * storiesPerPage
  );

  return (
    <Container maxW="container.lg">
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4}>
        <HStack spacing={4}>
          <Link href="#" color="white">new</Link>
          <Link href="#" color="white">past</Link>
          <Link href="#" color="white">comments</Link>
          <Link href="#" color="white">ask</Link>
          <Link href="#" color="white">show</Link>
          <Link href="#" color="white">jobs</Link>
          <Link href="#" color="white">submit</Link>
        </HStack>
      </Box>

      <VStack spacing={4} align="stretch">
        {displayedStories.map((story) => (
          <Box key={story.id} p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">{story.title}</Text>
            <Text>{story.points} points by {story.user} {story.time}</Text>
          </Box>
        ))}
      </VStack>

      <Flex justify="center" mt={4}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
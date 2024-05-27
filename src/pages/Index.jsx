import { Container, VStack, Box, Text, Link, HStack, Flex, Spacer, Button } from "@chakra-ui/react";
import { useState } from "react";

const stories = [
  { id: 1, title: "Story 1", points: 100, user: "user1", time: "2 hours ago" },
  { id: 2, title: "Story 2", points: 200, user: "user2", time: "3 hours ago" },
  { id: 3, title: "Story 3", points: 300, user: "user3", time: "4 hours ago" },
  // Add more stories as needed
];

const Index = () => {
  const [page, setPage] = useState(1);

  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="gray.100" p={4} mb={4} borderRadius="md">
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold">new</Link>
          <Link href="#">past</Link>
          <Link href="#">comments</Link>
          <Link href="#">ask</Link>
          <Link href="#">show</Link>
          <Link href="#">jobs</Link>
          <Link href="#">submit</Link>
        </HStack>
      </Box>

      <VStack spacing={4} align="stretch">
        {stories.map(story => (
          <Box key={story.id} p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">{story.title}</Text>
            <HStack spacing={2}>
              <Text>{story.points} points</Text>
              <Text>by {story.user}</Text>
              <Text>{story.time}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>

      <Flex mt={4} justify="center">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
        <Spacer mx={2} />
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Flex>
    </Container>
  );
};

export default Index;
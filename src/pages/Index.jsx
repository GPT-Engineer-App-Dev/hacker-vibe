import { Box, Container, Flex, Link, Text, VStack, HStack, Spacer, Button } from "@chakra-ui/react";
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
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4}>
        <Flex>
          <Text fontSize="xl" fontWeight="bold">Hacker News</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white">new</Link>
            <Link href="#" color="white">past</Link>
            <Link href="#" color="white">comments</Link>
            <Link href="#" color="white">ask</Link>
            <Link href="#" color="white">show</Link>
            <Link href="#" color="white">jobs</Link>
            <Link href="#" color="white">submit</Link>
          </HStack>
        </Flex>
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
        <Text mx={4}>Page {page}</Text>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Flex>
    </Container>
  );
};

export default Index;
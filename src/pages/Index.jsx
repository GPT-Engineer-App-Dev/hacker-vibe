import { Container, VStack, Box, Text, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
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
      <Box bg="orange.500" w="100%" p={4} color="white">
        <Flex>
          <Text fontSize="2xl" fontWeight="bold">Hacker News</Text>
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
      <VStack spacing={4} mt={4}>
        {stories.map(story => (
          <Box key={story.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontSize="lg" fontWeight="bold">{story.title}</Text>
            <Text fontSize="sm" color="gray.500">{story.points} points by {story.user} {story.time}</Text>
          </Box>
        ))}
      </VStack>
      <Flex mt={4} justify="center">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
        <Text mx={4} alignSelf="center">Page {page}</Text>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Flex>
    </Container>
  );
};

export default Index;
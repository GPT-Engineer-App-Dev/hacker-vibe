import { Container, VStack, Box, Text, Link, Flex, Spacer, HStack, Button, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Story 1",
    points: 100,
    user: "user1",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Story 2",
    points: 200,
    user: "user2",
    time: "3 hours ago",
  },
  // Add more stories as needed
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4}>
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold">Hacker News</Link>
          <Spacer />
          <Link href="#">new</Link>
          <Link href="#">past</Link>
          <Link href="#">comments</Link>
          <Link href="#">ask</Link>
          <Link href="#">show</Link>
          <Link href="#">jobs</Link>
          <Link href="#">submit</Link>
        </HStack>
      </Box>
      <VStack spacing={4} align="stretch">
        {stories.map((story) => (
          <Box key={story.id} p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">
              {story.title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {story.points} points by {story.user} {story.time}
            </Text>
          </Box>
        ))}
      </VStack>
      <Flex mt={4} justify="space-between">
        <IconButton aria-label="Previous Page" icon={<FaArrowLeft />} />
        <IconButton aria-label="Next Page" icon={<FaArrowRight />} />
      </Flex>
    </Container>
  );
};

export default Index;
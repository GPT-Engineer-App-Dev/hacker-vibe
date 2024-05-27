import { Box, VStack, Text, Link, HStack } from "@chakra-ui/react";

const StoryList = ({ stories }) => {
  return (
    <VStack spacing={4} align="stretch">
      {stories.map((story, index) => (
        <Box key={story.id} p={4} borderWidth="1px" borderRadius="md">
          <HStack spacing={2}>
            <Text fontWeight="bold">{index + 1}.</Text>
            <Link href={story.url} fontWeight="bold" color="blue.500">
              {story.title}
            </Link>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            {story.points} points by {story.user} {story.time_ago}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default StoryList;
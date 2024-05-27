import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="brand.800" px={4} py={2}>
      <Flex align="center">
        <Link href="/" color="white" fontWeight="bold" mr={4}>
          Hacker News
        </Link>
        <Link href="/new" color="white" mr={4}>
          new
        </Link>
        <Link href="/past" color="white" mr={4}>
          past
        </Link>
        <Link href="/comments" color="white" mr={4}>
          comments
        </Link>
        <Link href="/ask" color="white" mr={4}>
          ask
        </Link>
        <Link href="/show" color="white" mr={4}>
          show
        </Link>
        <Link href="/jobs" color="white" mr={4}>
          jobs
        </Link>
        <Link href="/submit" color="white">
          submit
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default NavBar;
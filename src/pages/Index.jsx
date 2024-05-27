import { useState, useEffect } from "react";
import { Container, Spinner } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import StoryList from "../components/StoryList";
import Pagination from "../components/Pagination";

const Index = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.hackerwebapp.com/news?page=${page}`);
        const data = await response.json();
        setStories(data);
        setHasNextPage(data.length > 0);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [page]);

  return (
    <Container maxW="container.lg">
      <NavBar />
      {loading ? (
        <Spinner size="xl" mt={8} />
      ) : (
        <>
          <StoryList stories={stories} />
          <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </>
      )}
    </Container>
  );
};

export default Index;
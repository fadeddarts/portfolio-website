import React, { useState, useEffect } from "react";
import BlogPostCard from "./blogpostcard";
import Navbar from "../Navbar";
import Footer from "../Footer"
import { VStack, ButtonGroup, IconButton, Container, Flex, Text } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const tweets = [
  "1964815186638086638",
  "1964755247521570833",
  "1964895660664410329",
  "1964815286101786941",
  "1967589628342567187",
  "1967700931975450757",
  "1967663985563721777",
  // "1964755247521570833",
  // "1964895660664410329",
  // "1964815286101786941",
  // "1964755247521570833",
  // "1964895660664410329",
  // "1964815286101786941",
];
// https://x.com/smthngliketsai/status/1967663985563721777
const tweetsPerPage = 6;
const maxVisiblePages = 5; // max numeric buttons visible

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(localStorage.getItem("currentPage")) || 1;
  });

  const totalPages = Math.ceil(tweets.length / tweetsPerPage);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const indexOfLastTweet = currentPage * tweetsPerPage;
  const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
  const currentTweets = tweets.slice(indexOfFirstTweet, indexOfLastTweet);

  const renderPageButtons = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);
  
    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisiblePages - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
    }
  
    // First page button with ellipsis if needed
    if (start > 1) {
      pages.push(
        <IconButton
          key={1}
          onClick={() => setCurrentPage(1)}
          size="sm"
          aria-label="Page 1"
          children={1}
        />
      );
      pages.push(<Text key="start-ellipsis" mx={1}>...</Text>);
    }
  
    // Main numeric buttons
    for (let i = start; i <= end; i++) {
      pages.push(
        <IconButton
          key={i}
          onClick={() => setCurrentPage(i)}
          variant={currentPage === i ? "solid" : "outline"}
          size="sm"
          aria-label={`Page ${i}`}
          children={i}
        />
      );
    }
  
    // Last page button with ellipsis if needed
    if (end < totalPages) {
      pages.push(<Text key="end-ellipsis" mx={1}>...</Text>);
      pages.push(
        <IconButton
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          size="sm"
          aria-label={`Page ${totalPages}`}
          children={totalPages}
        />
      );
    }
  
    return pages;
  };
  
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Container maxW="2xl" mt={4}>
        <VStack spacing={4} align="center">
          {currentTweets.map((tweetId) => (
            <BlogPostCard key={tweetId} tweetId={tweetId} />
          ))}
        </VStack>

        <Flex justify="center" mt={4}>
          <ButtonGroup variant="outline" size="sm" isAttached>
            <IconButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
              aria-label="Prev Page"
            ><LuChevronLeft /></IconButton>
            {renderPageButtons()}
            <IconButton
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              isDisabled={currentPage === totalPages}
              aria-label="Next Page"
            ><LuChevronRight /></IconButton>
          </ButtonGroup>
        </Flex>
        <Footer />
      </Container>
    </Flex>
  );
};

export default Blog;

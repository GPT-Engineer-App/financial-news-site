import { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, Image, VStack, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    ingress: "",
    text: "",
    image: "",
    byline: "",
    imageText: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setArticles([formData, ...articles]);
    setFormData({
      title: "",
      ingress: "",
      text: "",
      image: "",
      byline: "",
      imageText: "",
    });
  };

  const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.ingress.toLowerCase().includes(searchQuery.toLowerCase()) || article.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box p={5}>
      <Heading mb={4}>Financial News Publisher</Heading>
      <Stack spacing={3} mb={5}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" value={formData.title} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Ingress</FormLabel>
          <Input name="ingress" value={formData.ingress} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Text</FormLabel>
          <Textarea name="text" value={formData.text} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input name="image" value={formData.image} onChange={handleInputChange} placeholder="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBuZXdzfGVufDB8fHx8MTcxMzM1NTk4OXww&ixlib=rb-4.0.3&q=80&w=1080" />
        </FormControl>
        <FormControl>
          <FormLabel>Byline</FormLabel>
          <Input name="byline" value={formData.byline} onChange={handleInputChange} placeholder="Author's Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Image Text</FormLabel>
          <Input name="imageText" value={formData.imageText} onChange={handleInputChange} placeholder="Describe the image" />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleSubmit}>
          Publish Article
        </Button>
      </Stack>

      <InputGroup mb={4}>
        <Input placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <InputRightElement children={<IconButton aria-label="Search" icon={<FaSearch />} onClick={() => {}} />} />
      </InputGroup>

      <VStack spacing={5} align="stretch">
        {filteredArticles.map((article, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Image src={article.image} alt={article.title} />
            <Heading fontSize="xl">{article.title}</Heading>
            <Text mt={4}>{article.ingress}</Text>
            <Text fontSize="sm" color="gray.500">
              By {article.byline}
            </Text>
            <Text mt={2}>{article.text}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;

import React from "react";
import { Stack} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Tag, TagLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
  
const Product = ({ form }) => {
  console.log(form);
  return (
    <>
      {form.map((data) => (
        <Stack data-cy="product">
          <Image data-cy="product-image" src={data.imageSrc} />
          <Text data-cy="product-category">{data.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{data.title}</Heading>
          <Box data-cy="product-price">{data.price}</Box>
        </Stack>
      ))}
    </>
  );
};

export default Product;

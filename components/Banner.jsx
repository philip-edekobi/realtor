import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, imageUrl, buttonText }) => {
  return (
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
                <Image src={imageUrl} width="500" height="300" alt="banner"/>
                <Box p="5">
                    <Text fontSize="sm" fontWeight="medium" color="gray.500" >{purpose}</Text>
                    <Text fontSize="3xl" fontWeight="bold" >{title1}<br />{title2}</Text>
                    <Text fontSize="lg">{desc1}<br />{desc2}</Text>
                    <Button fontSize="xl" py="3" color="gray.700" >
                        <Link href={linkName}>{buttonText}</Link>
                    </Button>
                </Box>
            </Flex>
        );
};

export default Banner;
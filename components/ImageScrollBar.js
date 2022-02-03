import { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1px" >
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl" cursor="pointer"
            />
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1px" >
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl" cursor="pointer"
            />
        </Flex>
    );
}

const ImageScrollBar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}} >
        {data.map((image) => (
            <Box width="910px" itemId={image.id} overflow="hidden" p="1" key={image.id} >
                <Image 
                    placeholder="blur" src={image.url} 
                    blurDataURL={image.url} alt="property" 
                    width="1000" height="500" 
                    sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"  
                />
            </Box>
        ))}
    </ScrollMenu>
);

export default ImageScrollBar;
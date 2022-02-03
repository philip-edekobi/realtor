import { Box, Flex, Spacer, Avatar, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import { ImageScrollBar } from '../../components';

const PropertyDetails = ({ property: { 
    price, rooms, rentFrequency, 
    isVerified, title, baths, area, 
    agency, description, type, purpose, 
    furnishingStatus, amenities, photos } 
}) => (
    <Box maxWidth="1000px" margin="auto" p="4" >
        {photos && <ImageScrollBar data={photos} />}
        <Box w="full" p="6" >
        <Flex paddingTop="2" justifyContent="space-between" alignItems="center" >
            <Flex alignItems="center">
                <Box paddingRight="3" color="green.400" >
                    {isVerified && <GoVerified />}
                </Box>
                <Text fontSize="lg" fontWeight="bold" >AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" color="blue.400" w="250px" >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box marginTop="2">
            <Text fontSize="lg" mb="2" fontWeight="bold" >{title}</Text>
            <Text lineHeight="2" color="gray.600" >{description}</Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between" >
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                <Text>Type</Text>
                <Text fontWeight="bold" >{type}</Text>
            </Flex>
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                <Text>Purpose</Text>
                <Text fontWeight="bold" >{purpose}</Text>
            </Flex>
            {furnishingStatus && (
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                    <Text>Furnishing Status</Text>
                    <Text fontWeight="bold" >{furnishingStatus}</Text>
                </Flex>
            )}
        </Flex>
        <Box>
            {amenities.length && (<>
                <Text fontSize="2xl" fontWeight="black" mt="5" >Amenities</Text>
                <Flex flexWrap="wrap">
                    {amenities.map(item => (
                        item.amenities.map(amenity => (<Text fontWeight="bold" color="blue.400" p="2"
                        fontSize="lg" bg="gray.200" m='1' borderRadius="5"
                         key={amenity.text} >
                        {amenity.text}
                        </Text>))
                    ))}
                </Flex>
                </>
            )}
        </Box>
        </Box>
    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({  params: { id } }) {
    const property = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            property
        }
    }
}
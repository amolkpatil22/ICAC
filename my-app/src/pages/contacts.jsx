import { CheckIcon, EditIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Input, Text, border, Stack, InputGroup, InputLeftElement, InputRightElement, Textarea, Button, Spacer, FormControl } from "@chakra-ui/react"
import styles from "./contact.module.css"
import ToastExample from "../components/toast"
import { useToast } from '@chakra-ui/react'
import { useState } from "react"

function Contacts() {
    let info = {
        name: "",
        email: "",
        phone: "",
        details: ""
    }

    const toast = useToast()
    let [data, setdata] = useState(info)

    return <Box backgroundColor={"white"} padding={"2%"} width={"80%"} margin={"auto"} marginTop={"5%"} borderRadius={"20px"} marginBottom={"5%"}>
        <Flex>
            <Box width={"100%"}>
                <Heading color={"teal"} fontFamily={"monospace"} >
                    Got a <Text color={"facebook.600"} fontFamily={"body"}>question</Text> or need some help?
                </Heading>

                <Heading color={"facebook.500"} fontFamily={"monospace"} marginTop={"5%"}>
                    <PhoneIcon />(+91) 910 825 444
                </Heading>

            </Box>

            <Box width={"100%"} textAlign={"center"}>
                <form onSubmit={((e) => {
                    e.preventDefault();
                    window.Email.send({
                        // Host: "smtp.elasticemail.com",
                        // Port: "2525",
                        // Username: "amolkpatil22@gmail.com",
                        // Password: "666596CCEAA1CA1ED97E449A45EA9F6A7375",
                        SecureToken: "230cff22-2194-4ce7-ad2b-732cf8461a28",
                        To: `${data.email}`,
                        From: "icac03679@gmail.com",
                        Subject: `Inquiry`,
                        Body: `Dear ${data.name},
                        Thanks for contacting. Our associate will get in touch with you.                     
                       
                        Best regards,
                        ICAC,`

                    });
                    toast({
                        title: 'Thank you for your inquiry.',
                        description: "Our medical professionals will be in touch within the next 24 hours.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    setdata(info)
                })} >
                    <FormControl isRequired>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Text color={"teal"} paddingLeft={"20%"}>Name:</Text>
                                </InputLeftElement>
                                <Input value={data.name} name="name" onChange={((e) => {
                                    setdata({ ...data, [e.target.name]: e.target.value })
                                })}
                                    _focus={{ borderBottom: "1px", boxShadow: "none" }} _hover={{ borderBottom: "1px", boxShadow: "none" }} type='name' paddingLeft={"9%"} border={"none"} borderBottom={"1px"} borderRadius={"0"} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Text color={"teal"} paddingLeft={"20%"}>Phone:</Text>
                                </InputLeftElement>
                                <Input value={data.phone} name="phone" onChange={((e) => {
                                    setdata({ ...data, [e.target.name]: e.target.value })
                                })}
                                    _focus={{ borderBottom: "1px", boxShadow: "none" }} _hover={{ borderBottom: "1px", boxShadow: "none" }} type='name' paddingLeft={"9%"} border={"none"} borderBottom={"1px"} borderRadius={"0"} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Text color={"teal"} paddingLeft={"20%"}>Email:</Text>
                                </InputLeftElement>
                                <Input value={data.email} name="email" itemType="email" onChange={((e) => {
                                    setdata({ ...data, [e.target.name]: e.target.value })
                                })}
                                    _focus={{ borderBottom: "1px", boxShadow: "none" }} _hover={{ borderBottom: "1px", boxShadow: "none" }} type='name' paddingLeft={"9%"} border={"none"} borderBottom={"1px"} borderRadius={"0"} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Text color={"teal"} paddingLeft={"60%"}>Details</Text>
                                </InputLeftElement>
                                <Textarea value={data.details} name="details"
                                    onChange={((e) => {
                                        setdata({ ...data, [e.target.name]: e.target.value })
                                    })}
                                    _focus={{ shadow: "none" }} borderColor={"solid black 1px"} paddingLeft={"10%"} />
                            </InputGroup>
                        </Stack>
                        <Button type="submit" width={"100%"} marginTop={"5%"} color={"white"} borderRadius={"25px"}
                            colorScheme='teal'
                        >SEND</Button>
                    </FormControl>
                </form>
            </Box>
        </Flex>
    </Box>
}

export default Contacts
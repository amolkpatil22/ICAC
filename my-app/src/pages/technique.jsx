import { Box, Flex, Grid, Heading, Image, Link, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios"
import styles from "./technique.module.css"
import { SpinnerIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'



function Technique() {
    let api = "https://icac-payload.onrender.com/technique"
    let [tech, settech] = useState([])
    let [loading, setloading] = useState(false)
    let { isOpen, onOpen, onClose } = useDisclosure()
    let [modalId, setmodalId] = useState(1)

    function datafetch() {
        setloading(true)
        axios.get(api)
            .then((res) => { settech(res.data); setloading(false) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()

    }, [])

    function VerticallyCenter({ modalId, isOpen, onOpen, onClose }) {
        let modalLink = `${tech[modalId].link}`
        
        return (
            <>
                <Modal onClose={onClose} isOpen={isOpen} isCentered size={"2xl"} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{tech[modalId].name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <iframe width="560" height="315"
                                src={modalLink}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal >
            </>
        )
    }

    return (

        <Box width={"80%"} margin={"auto"} marginTop={"4%"} marginBottom={"5%"}>
            <Heading color={"whiteAlpha.800"}>Treatment Techniques</Heading>
            {loading && <Flex width={"100%"} alignItems={"center"} justifyContent={"center"} >
                <Spinner thickness='4px'
                    speed='0.65s'
                    emptyColor='white'
                    color='teal'
                    size='xl' />
            </Flex>}
            {tech.length !== 0 && <Grid className={styles.technique} >
                {tech?.map((e, ind) => {
                    return <Link onClick={((a) => { setmodalId(ind); onOpen() })} border={"solid skyblue"} borderRadius={"10px"} backgroundColor={"whiteAlpha.900"} padding={"4%"}>
                        <Image height={"70%"} src={e.image}></Image>
                        <Heading size={"md"}>{e.name}</Heading>
                        <Text>{e.description}</Text>
                    </Link>

                })}
            </Grid>}
            {tech.length !== 0 && <VerticallyCenter modalId={modalId} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
        </Box>
    )


}

export default Technique;
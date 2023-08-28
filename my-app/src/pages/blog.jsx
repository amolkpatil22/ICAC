import { Box, Button, Flex, Heading, Image, Link, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './blog.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

function Blog() {
    let api = "https://icac-payload.onrender.com/articles"
    let [article, setarticle] = useState([])
    let [page, setpage] = useState(1)
    let [loading, setloading] = useState(false)
    let limit = 5
    let totalpages = 4;

    function datafetch() {
        setloading(true)
        axios({
            method: "get",
            url: "https://icac-payload.onrender.com/articles",
            params: { _page: page, _limit: limit }
        })
            .then((res) => { setarticle(res.data); setloading(false) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()
    }, [page])

    const { isOpen, onOpen, onClose } = useDisclosure()

    function VerticallyCenter({ isOpen, onOpen, onClose }) {


        return (
            <>


                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <webview httpreferrer="https://www.who.int/news-room/fact-sheets/detail/low-back-pain#:~:text=Low%20back%20pain%20(LBP)%20describes,life%20and%20mental%20well%2Dbeing">hi </webview>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }






    return (
        <Box marginTop={"6%"} marginBottom={"5%"}  >
            <Heading marginLeft={"5%"} color={"whiteAlpha.800"}>BLOG</Heading>
            {loading && <Flex width={"100%"} alignItems={"center"} justifyContent={"center"} >
                <Spinner thickness='4px'
                    speed='0.65s'
                    emptyColor='white'
                    color='teal'
                    size='xl' />
            </Flex>}
            {article.length !== 0 && loading == false && <Flex width={"90%"} margin={"auto"} gap={"1%"} >
                <Flex width={"100%"} justifyContent={"center"} flexDirection={"column"} >
                    <Box backgroundColor={"white"} height={"max-content"} padding={"2%"} borderRadius={"10px"} >
                        <Link href={article[0].articleLink}  >
                            <Image borderRadius={"10px"} width={"100%"} height={"70%"} src={article[0].image} />
                            <Heading size={"lg"}>
                                {article[0].title}
                            </Heading>

                            <Text>
                                {article[0].author}
                            </Text>
                            <Text>
                                {article[0].date}
                            </Text>
                            <Text flexWrap={"wrap"}>
                                {article[0].content}
                            </Text>
                        </Link>
                    </Box>
                </Flex>
                <Box className={styles.grid} width={"90%"} >
                    <Box backgroundColor={"white"} padding={"2%"} borderRadius={"10px"}>
                        <Link href={article[1].articleLink} >
                            <Image borderRadius={"10px"} width={"100%"} height={"50%"} src={article[1].image} />
                            <Heading size={"xm"}>
                                {article[1].title}
                            </Heading>

                            <Text>
                                {article[1].author}
                            </Text>
                            <Text>
                                {article[1].date}
                            </Text>
                            <Text flexWrap={"wrap"}>
                                {article[1].content}
                            </Text>
                        </Link>
                    </Box>
                    <Box backgroundColor={"white"} padding={"2%"} borderRadius={"10px"}>
                        <Link href={article[2].articleLink} >
                            <Image borderRadius={"10px"} width={"100%"} height={"50%"} src={article[2].image} />
                            <Heading size={"xm"}>
                                {article[2].title}
                            </Heading>

                            <Text>
                                {article[2].author}
                            </Text>
                            <Text>
                                {article[2].date}
                            </Text>
                            <Text flexWrap={"wrap"}>
                                {article[2].content}
                            </Text>
                        </Link>
                    </Box>

                    <Box backgroundColor={"white"} padding={"2%"} borderRadius={"10px"}>
                        <Link href={article[3].articleLink} >
                            <Image borderRadius={"10px"} width={"100%"} height={"50%"} src={article[3].image} />
                            <Heading size={"xm"}>
                                {article[3].title}
                            </Heading>

                            <Text>
                                {article[3].author}
                            </Text>
                            <Text>
                                {article[3].date}
                            </Text>
                            <Text flexWrap={"wrap"}>
                                {article[3].content}
                            </Text>
                        </Link>
                    </Box>
                    <Box backgroundColor={"white"} padding={"2%"} borderRadius={"10px"}>
                        <Link href={article[4].articleLink} >
                            <Image borderRadius={"10px"} width={"100%"} height={"50%"} src={article[4].image} />
                            <Heading size={"xm"}>
                                {article[4].title}
                            </Heading>

                            <Text>
                                {article[4].author}
                            </Text>
                            <Text>
                                {article[4].date}
                            </Text>
                            <Text flexWrap={"wrap"}>
                                {article[4].content}
                            </Text>
                        </Link>
                    </Box>
                </Box>
            </Flex>}
            <Flex justifyContent={"space-between"} width={"20%"} margin={"auto"} marginTop={"5%"}>
                {new Array(totalpages).fill(0).map((e, ind) =>
                    <Button id={ind} onClick={((e) => {
                        setpage(ind + 1)
                    })}>{ind + 1}</Button>
                )}
            </Flex >
            <VerticallyCenter isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
    )
}

export default Blog;
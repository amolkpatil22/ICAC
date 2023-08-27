import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './blog.module.css'

function Blog() {
    let api = "http://localhost:3000/articles"
    let [article, setarticle] = useState([])
    let [page, setpage] = useState(1)
    let limit = 5
    let totalpages = 4;

    function datafetch() {
        axios({
            method: "get",
            url: "http://localhost:3000/articles",
            params: { _page: page, _limit: limit }
        })
            .then((res) => { setarticle(res.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()
    }, [page])


    return (
        <Box marginTop={"6%"} marginBottom={"5%"}  >
            <Heading marginLeft={"5%"} color={"whiteAlpha.800"}>BLOG</Heading>
            {article.length !== 0 && <Flex width={"90%"} margin={"auto"} gap={"1%"}>
                <Flex width={"100%"} justifyContent={"center"} flexDirection={"column"} >
                    <Box backgroundColor={"white"} height={"max-content"} padding={"2%"} borderRadius={"10px"}>
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
                        setpage(ind+1)
                    })}>{ind + 1}</Button>
                )}
            </Flex >
        </Box>  
    )
}

export default Blog;
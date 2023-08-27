import { Box, Card, CardBody, Flex, Grid, HStack, Heading, Image, Spacer, Text, VStack, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./treatment.module.css"
import VerticallyCenter from "../components/modal"

function Treatment() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [data, setdata] = useState([])
    let [id, setid] = useState(null)
    let api = "http://localhost:3000/treatment"


    function datafetch() {
        axios.get(api)
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()
    }, [])




    return (
        <Box width={"80%"} margin={"auto"} marginTop={"4%"} marginBottom={"5%"}>
            <Heading color={"whiteAlpha.800"}>WHAT WE TREAT</Heading>
            <Grid className={styles.card} >
                {data?.map((e) => {
                    return <Card border={"skyblue solid"} padding={"2%"} key={e.id} id={e.id} onClick={((a) => { setid(e.id); onOpen() })} >
                        <CardBody >
                            <Heading size={"sm"}>{e.name}</Heading>
                            <Image src={e.image} height={"150px"} width={"100%"} marginBottom={"10%"} marginTop={"5%"}></Image>

                            <Flex justifyContent={"space-between"}>
                                <Text>✅Causes:</Text>
                                <Box flexWrap={"wrap"}>{e.causes.map((a) => { return <Text>⭕{a}</Text> })}</Box>
                            </Flex>
                        </CardBody>
                    </Card>
                })}
            </Grid>
            <VerticallyCenter isOpen={isOpen} onOpen={onOpen} onClose={onClose} modalid={id} data={data}/>
        </Box>
    )
}

export default Treatment
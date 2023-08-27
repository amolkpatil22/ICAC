import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios"
import styles from "./technique.module.css"


function Technique() {
    let api = "http://localhost:3000/technique"
    let [tech, settech] = useState([])

    function datafetch() {
        axios.get(api)
            .then((res) => { settech(res.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()

    }, [])



    return (

        <Box width={"80%"} margin={"auto"} marginTop={"4%"} marginBottom={"5%"}>
            <Heading color={"whiteAlpha.800"}>Treatment Techniques</Heading>
            <Grid className={styles.technique} >
                {tech?.map((e) => {
                    return <Link href={e.link} border={"solid skyblue"} borderRadius={"10px"} backgroundColor={"whiteAlpha.900"} padding={"4%"}>
                        <Image height={"70%"} src={e.image}></Image>
                        <Heading size={"md"}>{e.name}</Heading>
                        <Text>{e.description}</Text>
                    </Link>
                })}
            </Grid>
        </Box>
    )


}

export default Technique;
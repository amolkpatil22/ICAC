import { Box, Heading, Text, Flex, Link, Image, HStack, Grid, grid } from "@chakra-ui/react";
import styles from "./landingPage.module.css"
import { Link as ReactLink } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { transform } from "framer-motion";
function LandingPage() {
    let api = "http://localhost:3000/doctors"
    let [doctors, setdoctors] = useState([])
    let [index, setindex] = useState(0)

    function datafetch() {
        axios.get(api)
            .then((res) => { setdoctors(res.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        datafetch()

    }, [])



    return (

        <Box>
            <Box marginLeft={"2%"} marginTop={"20%"} marginBottom={"5%"}>
                <Heading size={"3xl"} color={"white"}>ORTHOPEDIC CLINIC</Heading>
                <Heading size={"3xl"} color={"white"}>IN MADRIAD</Heading>
                <Text fontSize={"xl"} width={"35%"} flexWrap={"wrap"} marginTop={"2%"} color={"white"}>We specialize in the treatment of pathologies through minimally invasive techniques, by the hand of the most renowned doctors in each speciality</Text>
            </Box>


            {/* why to choose ICAC */}
            <Box padding={"2%"} backgroundColor={"white"} paddingTop={"5%"} paddingBottom={"15%"}>
                <Heading marginBottom={"2%"} flexWrap={"wrap"} width={"30%"} color={"grey"} fontWeight={"semibold"}>WHY CHOOSE ICAC TRAUMATOLOGY?</Heading>
                <Flex color={"black"} backgroundColor={"white"} borderTop={"grey solid"} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
                    <Box paddingLeft={"5%"} paddingTop={"8%"} borderRight={"grey solid"} >

                    </Box>

                    <Box paddingLeft={"5%"} paddingTop={"8%"} borderRight={"grey solid"} >
                        <Text fontSize={"5xl"} fontWeight={"bold"} >01</Text>
                        <Text fontWeight={"bold"} fontSize={"2xl"}>TOP PROFESSIONALS</Text>
                        <Text>We consider the human values to be the most important component of effective treatment for any disease</Text>
                    </Box>

                    <Box paddingLeft={"5%"} paddingTop={"8%"} borderRight={"grey solid"} >
                        <Text fontSize={"5xl"} fontWeight={"bold"}>02</Text>
                        <Text fontWeight={"bold"} fontSize={"2xl"}>LATEST TECHNOLOGY</Text>
                        <Text>We are the forefront of technological developement and medical innovation and that's what sets up apart</Text>
                    </Box>

                    <Box paddingLeft={"5%"} paddingTop={"8%"} >
                        <Text fontSize={"5xl"} fontWeight={"bold"}>03</Text>
                        <Text fontWeight={"bold"} fontSize={"2xl"}>PREMIUM FACILITIES</Text>
                        <Text>Guarantee of the best means and hospital center distributed by the Madriad Community</Text>
                    </Box>

                </Flex>
            </Box>

            {/* Our Doctors */}
            <Box backgroundColor={"white"} paddingLeft={"2%"}>
                <Heading>
                    OUR DOCTORS
                </Heading>

                <Flex marginTop={"5%"} >
                    {doctors?.map((e, ind) => {
                        return <Grid className={styles.grid}>
                            <Box display={index + 1 == ind ? "block" : "none"} >
                                <Image height={"100%"} width={"100%"} onClick={((e) => { setindex(index == 4 ? 0 : (index + 1)); })} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                            <Box className={styles.doctors}  display={index + 2 == ind ? "block" : "none"}>
                                <Image height={"100%"} width={"100%"} onClick={((e) => { setindex(index == 4 ? 0 : (index + 1)); })} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                            <Box display={index + 3 == ind ? "block" : "none"}>
                                <Image height={"100%"} width={"100%"} onClick={((e) => { setindex(index == 4 ? 0 : (index + 1)); })} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                        </Grid>
                    })}

                </Flex>
            </Box>
        </Box>

    )
}

export default LandingPage
import { Box, Heading, Text, Flex, Link, Image, HStack, Grid, grid, Icon } from "@chakra-ui/react";
import styles from "./landingPage.module.css"
import { Link as ReactLink } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { transform } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
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
            <Box padding={"2%"} backgroundColor={"white"} paddingTop={"5%"} paddingBottom={"10%"}>
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
            <Box backgroundColor={"white"} padding={"2%"}>
                <Heading flexWrap={"wrap"} width={"30%"} color={"grey"} fontWeight={"semibold"} >
                    OUR DOCTORS 🩺
                </Heading>

                <Flex padding={"2%"} marginTop={"5%"} justifyContent={"space-between"} alignItems={"center"}   >
                    <ArrowLeftIcon boxSize={"2%"} onClick={((e) => {
                        if (index == 0) {
                            setindex(0)
                        }
                        else {
                            setindex(index - 1)
                        }
                    })} />

                    {doctors?.map((e, ind) => {
                        return <Flex >

                            <Box width={"400px"} height={"600px"} display={index == ind ? "block" : "none"} textAlign={"center"}   >
                                <Image borderRadius={"10px"} height={"80%"} width={"100%"} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                            <Box width={"500px"} height={"700px"} display={index + 1 == ind ? "block" : "none"} textAlign={"center"} onClick={((e) => { index == 5 ? setindex(5) : setindex(index + 1) })}>
                                <Image borderRadius={"10px"} height={"80%"} width={"100%"} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                            <Box width={"400px"} height={"600px"} display={index + 2 == ind ? "block" : "none"} textAlign={"center"} >
                                <Image borderRadius={"10px"} height={"80%"} width={"100%"} key={ind} src={e.image} ></Image>
                                <Heading fontSize={"xl"}>{e.name}</Heading>
                                <Text>Specialist: {e.specialist}</Text>
                            </Box>
                        </Flex>
                    })}
                    <ArrowRightIcon boxSize={"2%"} onClick={((e) => {
                        if (index == 5) {
                            setindex(5)
                        }
                        else {
                            setindex(index + 1)
                        }
                    })} />

                </Flex>
            </Box>
        </Box>

    )
}

export default LandingPage
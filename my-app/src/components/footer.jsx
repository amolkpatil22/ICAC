import { Box, Flex, Heading, Text, Link, Spacer } from "@chakra-ui/react"
import { h2 } from "react"
import { Link as ReactLink } from "react-router-dom"
import styles from "./footer.module.css"
function Footer() {


    return (
        <Flex color={"teal"}  backgroundColor={"whiteAlpha.900"} border={"teal solid"} justifyContent={"space-between"}>
            <Box className={styles.footer}>
                <Heading letterSpacing={"2px"}>ICAC</Heading>
            </Box>
          
            <Box className={styles.footer}>
                <Text color={"grey"} fontWeight={"bold"}>CONTACTS</Text>
                <Text>C. del Corazon de Maria 68, Madrid</Text>
                <Text>+91 910 053 500</Text>
                <Text>info@icac.com</Text>
            </Box>
          
            <Box className={styles.footer}>
                <Text color={"grey"} fontWeight={"bold"}>SITE MAP</Text>
                <Link as={ReactLink} to="/treatment"  >What we treat</Link>
                <Link as={ReactLink} to="/technique"  >Technique</Link>
                <Link as={ReactLink} to="/blog"   >Blog</Link>
                <Link as={ReactLink} to="/appointment"  >Book an Appointment</Link>
            </Box>
          
            <Box className={styles.footer} >
                <Text color={"grey"} fontWeight={"bold"}>SOCIAL MEDIA</Text>
                <Link href="https://twitter.com/" >Twitter</Link>
                <Link href="https://www.youtube.com/"  >YouTube</Link>
            </Box>

        </Flex>


    )
}

export default Footer
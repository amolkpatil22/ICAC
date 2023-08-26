import React from 'react';
import { Box, Button, Flex, Icon, Image, Spacer, Link, Text } from '@chakra-ui/react'
import logo from "../Payload/logo.png"
import { Link as ReactLink } from 'react-router-dom';
import styles from "./Navbar.module.css"



function Navbar() {
    return (
        <Flex px={"1%"} py={".8%"} color={"white"} >
            <Box style={{
                boxSize: 'sm',
                width: "150px",
                height: "100%",
                borderRadius: "20px",
                padding: "1.5"
            }}>
                <Image src={logo} height={"100%"} width={"100%"} />
            </Box>
            <Spacer />
            <Flex className={styles.NavLink}>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/" className={styles.NavLinkChild} >Home</Link>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/treatment" className={styles.NavLinkChild} >What we treat</Link>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/technique" className={styles.NavLinkChild} >Technique</Link>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/blog" className={styles.NavLinkChild}  >Blog</Link>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/contacts" className={styles.NavLinkChild}  >Contacts</Link>
                {/* <Text className={styles.NavLinkChild} >(+91) 888 787 222</Text> */}
                <Link as={ReactLink} to="/appointment" className={styles.NavLinkChild} style={{ textDecoration: "none" }} >Book an Appointment </Link>
            </Flex>
        </Flex>

    )
}



export default Navbar;  
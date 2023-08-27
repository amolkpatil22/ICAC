import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Box,
    Text,
    Flex,
    Spacer
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';


function VerticallyCenter({ isOpen, onOpen, onClose, modalid, data }) {
    let [modalData, setmodalData] = useState({})

    useEffect(() => {
        data.map((e) => {
            if (e.id == modalid) {
                setmodalData(e)
            }
        })
    })


    return (
        <>

            <Modal onClose={onClose} isOpen={isOpen} size={"4xl"} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalData.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex marginBottom={"2%"}>
                            <Image marginRight={"4%"} width={"50%"} height={"200px"} src={modalData.image}></Image>
                            <Box>
                                <Text color={"red"} fontSize={"xl"} marginBottom={"2%"}>❇️Causes:</Text>
                                {modalData.causes?.map((e) => { return <Text marginBottom={"2%"}>⭕{e}</Text> })}
                            </Box>
                        </Flex>
                        <Flex>
                            <Box marginRight={"4%"} width={"50%"} rowGap={"15px"}>
                                <Text color={"green"} fontSize={"xl"} marginBottom={"2%"}>❇️Precautions:</Text>
                                {modalData.precautions?.map((e) => { return <Text marginBottom={"2%"}>⭕{e}</Text> })}
                            </Box>

                            <Box >
                                <Text color={"teal"} fontSize={"xl"} marginBottom={"2%"} >❇️Treatment:</Text>
                                {modalData.treatment?.map((e) => { return <Text marginBottom={"2%"}>⭕{e}</Text> })}
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default VerticallyCenter;
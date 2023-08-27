import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Grid,
    Box,
    Textarea,
    Text,
    Heading,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useToast } from '@chakra-ui/react'

function AppointmentForm() {
    const toast = useToast()
    let info = {
        fullName: "",
        email: "",
        phoneNumber: "",
        department: "",
        dob: "",
        gender: "",
        appointmentDate: "",
        appointmentTime: "",
        address: "",
        symptoms: "",
    }
    const [formData, setFormData] = useState(info);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        const newErrors = {};
        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required";
        }
        if (!formData.email) {
            newErrors.email = "Email is required";
        }
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone Number is required";
        }
        if (!formData.department) {
            newErrors.department = "Please select a department";
        }
        // Add more validation for other fields...

        setErrors(newErrors);

        // If there are no errors, proceed with submission
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true); // Set submitted to true on successful submission
        }
    };

    return (
        <Box p={4} backgroundColor={"white"} width={"50%"} margin={"auto"} marginTop={"4%"} marginBottom={"4%"} borderRadius={"20px"}  >
            {submitted ? (
                <Grid templateColumns="repeat(2, 1fr)" padding={"2%"} gap={4}>
                    <Heading size={"lg"} color={"teal"} gridColumn="span 2" fontSize="xl" fontWeight="bold">
                        <EditIcon /> Appointment Details:
                    </Heading>
                    {Object.entries(formData).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <Text gridColumn="1" fontWeight="bold">
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </Text>
                            <Text gridColumn="2">{value}</Text>
                        </React.Fragment>
                    ))}
                    <Button onClick={((e) => {
                        toast({
                            title: 'Appointment successfully booked!',
                            description: "You will receive a confirmation email shortly.",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        });
                        setSubmitted(false);
                        setFormData(info)
                    })} colorScheme="teal" gridColumn="span 2" mt={4}>
                        Confirm Appointment
                    </Button>
                </Grid>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Heading marginBottom={"3%"} size={"lg"} color={"teal"} >  <EditIcon /> Book An Appoinment</Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                            {errors.fullName && <span>{errors.fullName}</span>}
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span>{errors.email}</span>}
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Department</FormLabel>
                            <Select
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                            >
                                <option value="">Select a department</option>
                                <option value="ortho">Orthopedics</option>
                                {/* Add more department options here */}
                            </Select>
                            {errors.department && <span>{errors.department}</span>}
                        </FormControl>

                        <FormControl>
                            <FormLabel>Date of Birth</FormLabel>
                            <Input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Appointment Date</FormLabel>
                            <Input
                                type="date"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Appointment Time</FormLabel>
                            <Input
                                type="time"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Symptoms</FormLabel>
                            <Textarea
                                name="symptoms"
                                value={formData.symptoms}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <Button colorScheme="teal" gridColumn="span 2" type="submit">
                            Book Appointment
                        </Button>
                    </Grid>
                </form>
            )}
        </Box>
    );
}

export default AppointmentForm;

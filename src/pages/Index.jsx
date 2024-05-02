import React, { useState } from "react";
import { Button, Text, useToast, VStack, Heading, Container } from "@chakra-ui/react";
import { FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const [isArmed, setIsArmed] = useState(false);
  const toast = useToast();

  const handleToggleAlarm = () => {
    setIsArmed(!isArmed);
    toast({
      title: isArmed ? "Security System Disarmed" : "Security System Armed",
      description: isArmed ? "The security system is now off." : "The security system is now active.",
      status: isArmed ? "warning" : "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Home Security System</Heading>
        <Text>{isArmed ? "System is currently ARMED." : "System is currently DISARMED."}</Text>
        <Button leftIcon={<FaShieldAlt />} colorScheme={isArmed ? "red" : "green"} onClick={handleToggleAlarm}>
          {isArmed ? "Disarm System" : "Arm System"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

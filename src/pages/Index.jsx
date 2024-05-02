import React, { useState } from "react";
import { Button, Text, useToast, VStack, Heading, Container } from "@chakra-ui/react";
import { FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const [systemStatus, setSystemStatus] = useState("unarmed");
  const toast = useToast();

  const handleToggleAlarm = () => {
    const nextStatus = systemStatus === "unarmed" ? "armedAway" : systemStatus === "armedAway" ? "armedHome" : "unarmed";
    setSystemStatus(nextStatus);
    toast({
      title: `Security System ${nextStatus.charAt(0).toUpperCase() + nextStatus.slice(1)}`,
      description: `The security system is now ${nextStatus.replace("armed", "armed - ")}.`,
      status: nextStatus === "unarmed" ? "warning" : "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Home Security System</Heading>
        <Text>{systemStatus === "unarmed" ? "System is currently UNARMED." : `System is currently ARMED - ${systemStatus.replace("armed", "").trim().toUpperCase()}.`}</Text>
        <Button leftIcon={<FaShieldAlt />} colorScheme={systemStatus === "unarmed" ? "green" : "red"} onClick={handleToggleAlarm}>
          {systemStatus === "unarmed" ? "Arm Away" : systemStatus === "armedAway" ? "Arm Home" : "Disarm"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

import React, { useState } from "react";
import { Button, Text, useToast, VStack, Heading, Container, RadioGroup, Stack, Radio } from "@chakra-ui/react";
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
        <RadioGroup onChange={setSystemStatus} value={systemStatus}>
          <Stack direction="row">
            <Radio value="unarmed">Unarmed</Radio>
            <Radio value="armedAway">Armed Away</Radio>
            <Radio value="armedHome">Armed Home</Radio>
          </Stack>
        </RadioGroup>
      </VStack>
    </Container>
  );
};

export default Index;

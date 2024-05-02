import React, { useState } from "react";
import { Box, Button, Input, Text, useToast, VStack, Heading, Container } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

const Index = () => {
  const [time, setTime] = useState("");
  const [timer, setTimer] = useState(null);
  const toast = useToast();

  const handleSetAlarm = () => {
    if (timer) {
      clearTimeout(timer);
    }

    const alarmTime = new Date(time);
    const now = new Date();
    const timeToAlarm = alarmTime.getTime() - now.getTime();

    if (timeToAlarm < 0) {
      toast({
        title: "Invalid Time",
        description: "Please set a time in the future.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const timeoutId = setTimeout(() => {
      toast({
        title: "Alarm",
        description: "Your alarm is ringing!",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }, timeToAlarm);

    setTimer(timeoutId);

    toast({
      title: "Alarm Set",
      description: `Your alarm is set for ${alarmTime.toLocaleTimeString()}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Alarm System</Heading>
        <Text>Set your alarm:</Text>
        <Input placeholder="Select time" size="md" type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
        <Button leftIcon={<FaBell />} colorScheme="blue" onClick={handleSetAlarm}>
          Set Alarm
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

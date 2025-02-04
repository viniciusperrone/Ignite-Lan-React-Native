import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
} from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";
import { OrderProps } from "@shared/types";

export function Order({ data, ...rest }: OrderProps) {
  const { colors } = useTheme();

  const statusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <VStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="center"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimônio {data.patrimony}
          </Text>

          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
            </Text>

            <Circle bg="gray.500" h={12} mr={5}>
              {data.status === "closed" ? (
                <CircleWavyCheck size={24} />
              ) : (
                <Hourglass size={24} color={statusColor} />
              )}
            </Circle>
          </HStack>
        </VStack>
      </VStack>
    </Pressable>
  );
}

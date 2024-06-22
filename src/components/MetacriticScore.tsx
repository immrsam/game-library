import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function MetacriticScore({ score }: Props) {
  let color = score > 85 ? "green" : score > 70 ? "yellow" : score > 60 ? "orange" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default MetacriticScore;

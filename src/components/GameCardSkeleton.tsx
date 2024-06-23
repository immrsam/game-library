import { Card, CardBody, Heading, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
        <Heading>Skeleton</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface IProps {
  name: string;
  count: number;
}

const NFTCard: React.FC<IProps> = (props: IProps) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>
          hello: {props.name}: {count}{" "}
        </h1>
        <Button colorScheme="blue" onClick={addCount}>
          Add1
        </Button>
      </div>
    </>
  );
};

export default NFTCard;

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { LiaChessKingSolid } from "react-icons/lia";

const page = () => {
  return (
    <div className="flex flex-col md:px-70">
      {/* row 1 */}
      <CardContainer className="grid grid-cols-3  gap-4">
        <CardItem title="♟️ Playing Chess" className="dark:bg-white text-black">
          <p className="text-9xl">
            <LiaChessKingSolid className="" />
          </p>
        </CardItem>
        <CardItem title="🕵🏽‍♂️ Mystery Games" className="bg-black text-white">
          <p>
            I enjoy unraveling narratives, decoding puzzles — it’s like
            debugging a story.
          </p>
        </CardItem>
        <CardItem
          title="🎧 Podcasts"
          className="dark:bg-white text-black bg-black"
        >
          <p>
            From dev talks to true crime, podcasts are my passive way to stay
            sharp.
          </p>
        </CardItem>
        {/* row 2 */}
        <CardItem title="🕵🏽‍♂️ Mystery Games" className="bg-black text-white">
          <p>
            I enjoy unraveling narratives, decoding puzzles — it’s like
            debugging a story.
          </p>
        </CardItem>
        <CardItem
          title="🎧 Podcasts"
          className="dark:bg-white text-black bg-black"
        >
          <p>
            From dev talks to true crime, podcasts are my passive way to stay
            sharp.
          </p>
        </CardItem>
        <CardItem
          title="🧠 Algorithm Challenges"
          className="bg-black text-white"
        >
          <p>Solving coding problems feels like chess — every move counts.</p>
        </CardItem>
        {/* row 3 */}
        <CardItem title="♟️ Playing Chess" className="dark:bg-white text-black">
          <p className="text-9xl">
            <LiaChessKingSolid className="" />
          </p>
        </CardItem>
        <CardItem title="🕵🏽‍♂️ Mystery Games" className="bg-black text-white">
          <p>
            I enjoy unraveling narratives, decoding puzzles — it’s like
            debugging a story.
          </p>
        </CardItem>
        <CardItem
          title="🎧 Podcasts"
          className="dark:bg-white text-black bg-black"
        >
          <p>
            From dev talks to true crime, podcasts are my passive way to stay
            sharp.
          </p>
        </CardItem>
        {/* row 4 */}
        <CardItem title="🕵🏽‍♂️ Mystery Games" className="bg-black text-white">
          <p>
            I enjoy unraveling narratives, decoding puzzles — it’s like
            debugging a story.
          </p>
        </CardItem>
        <CardItem
          title="🎧 Podcasts"
          className="dark:bg-white text-black bg-black"
        >
          <p>
            From dev talks to true crime, podcasts are my passive way to stay
            sharp.
          </p>
        </CardItem>
        <CardItem
          title="🧠 Algorithm Challenges"
          className="bg-black text-white"
        >
          <p>Solving coding problems feels like chess — every move counts.</p>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default page;

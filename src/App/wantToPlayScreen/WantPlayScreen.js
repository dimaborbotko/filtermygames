import React from "react";
import GameCard from "../../components/gameCard/GameCard";
import { useSelector } from "react-redux";
import ContainerCard from "../../components/gameCard/ContainerCard";

export default function WantPlayScreen() {
  const willPlay = useSelector((state) => state.fake.willPlay);
  return (
    <div>
      <h1>Want to play</h1>
      <ContainerCard>
        {willPlay?.length !== 0 ? (
          willPlay?.map((el, index) => (
            <GameCard key={index} item={el} name={el.name} label={el.label} />
          ))
        ) : (
          <h1>You haven't added any games yet</h1>
        )}
      </ContainerCard>
    </div>
  );
}

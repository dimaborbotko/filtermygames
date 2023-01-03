import React from "react";
import ContainerCard from "../../components/gameCard/ContainerCard";
import { useSelector } from "react-redux";
import GameCard from "../../components/gameCard/GameCard";

export default function FinishedGames() {
  const finished = useSelector((state) => state.fake.finished);
  return (
    <div>
      <h1>FinishedGames</h1>
      <ContainerCard>
        {finished?.length !== 0 ? (
          finished?.map((el, index) => (
            <GameCard key={index} item={el} name={el.name} label={el.label} />
          ))
        ) : (
          <h1>You haven't completed any games yet</h1>
        )}
      </ContainerCard>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import GameCard from "../../components/gameCard/GameCard";
import ContainerCard from "../../components/gameCard/ContainerCard";

export default function PlayingNowScreen() {
  const inProgress = useSelector((state) => state.fake.inProgress);
  return (
    <div>
      <h1>In progress</h1>
      <ContainerCard>
        {inProgress?.length !== 0 ? (
          inProgress?.map((el, index) => (
            <GameCard key={index} item={el} name={el.name} label={el.label} />
          ))
        ) : (
          <h1>You haven't added any games yet</h1>
        )}
      </ContainerCard>
    </div>
  );
}

import React, { useEffect } from "react";
import ContainerCard from "../../components/gameCard/ContainerCard";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../../components/gameCard/GameCard";
import { fetchGamesByUserId } from "../../store/requestsReducer/steamSlice";

export default function HomeScreen() {
  const { loading, games, error } = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGamesByUserId("76561199232119845"));
    // eslint-disable-next-line
  }, []);
  if (loading) console.log(loading);
  if (error) console.log(error);

  return (
    <div>
      <ul className="flex conten px-1 bg-[#376167] rounded-full divide-solid divide-x divide-white divide-x absolute right-3 top-3 ">
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">STM</li>
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">GOG</li>
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">ALL</li>
      </ul>
      <ContainerCard>
        {games?.map((item) => (
          <GameCard
            key={item.game.appid}
            item={item}
            name={item.game.name}
            poster={`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.game.appid}/header.jpg`}
            status={item.status}
          />
        ))}
      </ContainerCard>
    </div>
  );
}

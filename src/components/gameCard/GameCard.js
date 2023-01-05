import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFinished,
  addToInProgress,
  addToWillPlay,
} from "../../store/fakeReducer/FakeSlice";

export default function GameCard({ item, name, poster, }) {
  const { fakeStatus, willPlay, inProgress, finished } = useSelector(
    (state) => state.fake
  );

  const [activeStatus, setActiveStatus] = useState(fakeStatus[0]);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const changeStatus = (stat) => {
    setActiveStatus(stat);
    setOpen(!open);
    if (stat.value === "willPlay") {
      dispatch(addToWillPlay(item));
    } else if (stat.value === "inProgress") {
      dispatch(addToInProgress(item));
    } else if (stat.value === "finished") {
      dispatch(addToFinished(item));
    }
  };

  useEffect(() => {
    if (willPlay.find((el) => el.index === item.index))
      setActiveStatus(fakeStatus[1]);
    if (inProgress.find((el) => el.index === item.index))
      setActiveStatus(fakeStatus[2]);
    if (finished.find((el) => el.index === item.index))
      setActiveStatus(fakeStatus[3]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="rounded-full mx-3 my-3">
      <img
        className="rounded-md"
        src={poster}
        alt="game"
        style={{
          objectFit: "cover",
          height: "auto",
          width: "100%",
        }}
      />

      <div>
        <h1>{name}</h1>
        <div className="relative">
          <p
            onClick={() => setOpen(!open)}
            className={`${activeStatus.style} inline cursor-pointer select-none`}
          >
            {activeStatus.label}
          </p>
          <div
            className={
              open === true
                ? `inline absolute top-8 left-0 bg-main-white space-y-1 rounded-md py-1 px-1 select-none`
                : `hidden`
            }
          >
            {fakeStatus.map((el) => (
              <p
                key={el.value}
                onClick={() => changeStatus(el)}
                className={`${el.style} cursor-pointer align-baseline`}
              >
                {el.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

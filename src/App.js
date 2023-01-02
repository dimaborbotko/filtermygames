import "./App.css";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import HomeScreen from "./App/homeScreen/HomeScreen";
import WantPlayScreen from "./App/wantToPlayScreen/WantPlayScreen";
import PlayingNowScreen from "./App/payingNowScreen/PlayingNowScreen";
import FinishedGames from "./App/finishedGamesScreen/FinishedGames";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginScreen from "./App/loginScreen/LoginScreen";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/filtermygames/login" element={<LoginScreen />} />
      </Route>

      <Route path="/" element={<UserLayout />}>
        <Route path="/filtermygames/wantPlay" element={<WantPlayScreen />} />
        <Route path="/filtermygames/playingNow" element={<PlayingNowScreen />} />
        <Route path="/filtermygames/finishedGames" element={<FinishedGames />} />
        <Route path="/" element={<HomeScreen />} />
      </Route>
    </>
  )
);

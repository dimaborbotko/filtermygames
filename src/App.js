import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from "./components/userLayout/UserLayout";
import HomeScreen from "./App/homeScreen/HomeScreen";
import WantPlayScreen from "./App/wantToPlayScreen/WantPlayScreen";
import PlayingNowScreen from "./App/payingNowScreen/PlayingNowScreen";
import FinishedGames from "./App/finishedGamesScreen/FinishedGames";
import AuthLayout from "./components/authLayout/AuthLayout";
import LoginScreen from "./App/loginScreen/LoginScreen";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginScreen />} />
      </Route>

      <Route path="/" element={<UserLayout />}>
        <Route path="/wantPlay" element={<WantPlayScreen />} />
        <Route path="/playingNow" element={<PlayingNowScreen />} />
        <Route path="/finishedGames" element={<FinishedGames />} />
        <Route path="/" element={<HomeScreen />} />
      </Route>
    </>
  )
);

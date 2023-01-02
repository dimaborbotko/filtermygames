import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import HomeScreen from "./App/homeScreen/HomeScreen";
import WantPlayScreen from "./App/wantToPlayScreen/WantPlayScreen";
import PlayingNowScreen from "./App/payingNowScreen/PlayingNowScreen";
import FinishedGames from "./App/finishedGamesScreen/FinishedGames";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginScreen from "./App/loginScreen/LoginScreen";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginScreen />} />
      </Route>

      <Route path="/filtermygames" element={<UserLayout />}>
        <Route path="/filtermygames/wantPlay" element={<WantPlayScreen />} />
        <Route path="/playingNow" element={<PlayingNowScreen />} />
        <Route path="/finishedGames" element={<FinishedGames />} />
        <Route path="/filtermygames" element={<HomeScreen />} />
      </Route>
    </>
  )
);

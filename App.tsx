import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginContinueAs } from "./routes/LoginContinueAs";
import { LoginScreen } from "./routes/LoginScreen";
import { ContinueAsGuest } from "./routes/ContinueAsGuest";
import { Menu } from "./routes/Menu55";
import { NewsOpenedPost } from "./routes/NewsOpenedPost25";
import { AboutMe } from "./routes/AboutMe";
import { InboxPromotions } from "./routes/InboxPromotions";
import { SettingsPrivacy } from "./routes/SettingsPrivacy";
import { ChangePassword } from "./routes/ChangePassword";
import { SignUp } from "./routes/SignUpDisabled";
import { Competitions } from "./routes/Competitions59";
import { Vip } from "./routes/Vip";
import { ShopCatalogOf } from "./routes/ShopCatalogOf";
import { ForgotPassword } from "./routes/ForgotPassword";
import { StreamsListOf } from "./routes/StreamsListOf71";
import { FanfeedNewestTab } from "./routes/FanfeedNewestTab";
import { FanfeedMostPopular } from "./routes/FanfeedMostPopular";
import { FanfeedMyPosts } from "./routes/FanfeedMyPosts";
import { EventsListOf } from "./routes/EventsListOf87";
import { EventsListOf as EventsListOf89 } from "./routes/EventsListOf89";
import { EventsListOf as EventsListOf91 } from "./routes/EventsListOf91";
import { EventsPhotogallery } from "./routes/EventsPhotogallery";
import { GuestModeComments } from "./routes/GuestModeComments";

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginContinueAs />} />
          <Route path="/login-form" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/continue-as-guest" element={<ContinueAsGuest />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<NewsOpenedPost />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/about-me/events" element={<EventsListOf91 />} />
          <Route path="/about-me/news" element={<EventsListOf />} />
          <Route path="/events-list" element={<EventsListOf89 />} />
          <Route path="/events-list-91" element={<EventsListOf91 />} />
          <Route path="/inbox" element={<InboxPromotions />} />
          <Route path="/settings" element={<SettingsPrivacy />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/vip" element={<Vip />} />
          <Route path="/shop" element={<ShopCatalogOf />} />
          <Route path="/streams" element={<StreamsListOf />} />
          <Route path="/fanfeed" element={<FanfeedNewestTab />} />
          <Route path="/fanfeed-popular" element={<FanfeedMostPopular />} />
          <Route path="/fanfeed-my-posts" element={<FanfeedMyPosts />} />
          <Route path="/events-photogallery" element={<EventsPhotogallery />} />
          <Route path="/guest-mode" element={<GuestModeComments />} />
        </Routes>
      </div>
    </Router>
  );
};

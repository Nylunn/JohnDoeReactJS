import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  About,
  NotFound,
  Test,
  Profile,
  Repo,
  Activity,
  Following,
  Followers,
  SingleRepo,
} from './pages';
import './index.css';

export default function App() {
   return (
    <section>
        <Route path="/" element={<Home />} />
        <Route exact path="/user" element={<Profile />}>
          <Route exact path="/user/repo" element={<Repo />}>
            <Route exact path=":repoid" element={<SingleRepo />} />
          </Route>
          <Route exact path="/user/activity" element={<Activity />} />
          <Route exact path="/user/following" element={<Following />} />
          <Route exact path="/user/followers" element={<Followers />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
    </section>
  );
}
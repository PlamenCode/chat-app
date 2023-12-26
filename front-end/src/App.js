import React, { useState } from "react";

import "./App.css";

import ChatsPage from "./pages/ChatsPage";
import { AuthPage } from "./pages/AuthPage";

export default function App() {
  const [user, setUser] = useState(undefined);
  const project_id = 'cf37dadf-6293-4c7e-9cd4-834a6e078a6e';

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} project_id={project_id} />;
  }
};
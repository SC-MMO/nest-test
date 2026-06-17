import { useState, useEffect } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

import { callAPI } from "./Helpers";
import type { User } from "./Types";

function Test() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const [users, setUsers] = useState([]);

  const fetchFruits = async () => {
    const response = await callAPI("get", "/fruits");
    setArray(response.data.fruits);
  };

  const fetchUsers = async () => {
    const response = await callAPI("get", "/users");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchFruits();
    fetchUsers();
  }, []);

  const [volume, setVolume] = React.useState<number>(30);
  const handleChange = (event: Event, newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>fruit is {array[count % array.length]}</p>
      </div>
      <Box sx={{ width: 200, margin: "0 auto" }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <VolumeDown />
          <Slider aria-label="Volume" value={volume} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        at {volume}%
      </Box>
      <h1>Users:</h1>
      <ul>
        {users.map((user: User) => (
          <div key={user.id}>
            {user.username} ({user.email}) since{" "}
            {new Date(user.createdAt).toLocaleString()}
          </div>
        ))}
      </ul>
    </>
  );
}

export { Test };

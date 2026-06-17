import { useState, useEffect } from "react";
import { callAPI } from "./Helpers";
import type { Post } from "./Types";

import { Container } from "@mui/material";

import * as React from "react";
import Modal from "@mui/material/Modal";
import { Card, TextField, Button, Typography } from "@mui/material";

import { PostBlock } from "./Block";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Posts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await callAPI("get", "/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreation = async (formData: {
    title: string;
    content: string;
  }) => {
    const response = await callAPI("post", "/create_post", formData);
    if (response.status === 201) {
      window.location.reload();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      content: (form.elements.namedItem("content") as HTMLInputElement).value,
    };

    handlePostCreation(formData);
  };
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Create a new Post
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                name="title"
                sx={{ m: "0.5rem" }}
                size="small"
                required
                label="Title"
                placeholder="eg. 'Update on my life'"
                fullWidth
                autoFocus
                required
              />

              <TextField
                name="content"
                sx={{ m: "0.5rem" }}
                id="outlined-multiline-static"
                label="Content"
                multiline
                rows={6}
                fullWidth
                placeholder="eg. 'So to start...'"
                required
              />

              <Button
                sx={{ m: "0.5rem" }}
                variant="outlined"
                size="large"
                color="inherit"
                fullWidth
                type="submit"
              >
                Post
              </Button>
            </form>
          </Card>
        </Modal>
      </div>

      <h1>Posts:</h1>
      <ul>
        {posts.map((post: Post) => (
          <Container key={post.id}>
            <PostBlock
              title={post.title}
              content={`${post.author.username} ${post.content}`}
            />
          </Container>
        ))}
      </ul>
      <Button
        color="primary"
        variant="contained"
        sx={{ position: "fixed", top: "90%", right: "10%" }}
        onClick={handleOpen}
      >
        Create Post
      </Button>
    </>
  );
}

export { Posts };

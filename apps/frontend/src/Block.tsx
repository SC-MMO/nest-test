import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface PostBlockProps {
  title: string;
  content: string;
}

function PostBlock({ title, content }: BlockProps) {
  return (
    <div style={{ width: "100%" }}>
      <Box
        component="span"
        sx={(theme) => ({
          display: "block",
          p: 1,
          m: 1,
          bgcolor: "#fff",
          color: "grey.800",
          border: "1px solid",
          borderColor: "grey.300",
          borderRadius: 2,
          fontWeight: "700",
          width: 750,
          minHeight: 120,
          maxHeight: 450,
          wordWrap: "break-word",
          overflowWrap: "break-word",
          ...theme.applyStyles("dark", {
            bgcolor: "#101010",
            color: "grey.300",
            borderColor: "grey.800",
          }),
        })}
      >
        <Typography
          align="left"
          variant="h5"
          gutterBottom
          fontWeight="bold"
          sx={{
            px: 2,
            pt: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          align="left"
          variant="body2"
          gutterBottom
          fontWeight="bold"
          sx={{
            px: 2,
            pb: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 10,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
      </Box>
    </div>
  );
}

export { PostBlock };

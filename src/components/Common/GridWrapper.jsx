import { Box } from "@mui/material";

const GridWrapper = ({ gridColumns, child }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        }}
      >
        {child}
      </Box>
    </div>
  );
};

export default GridWrapper;

import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import DentistCard from "../../Common/DentistCard/DentistCard";
import { Box } from "@mui/material";
import { baseSx } from "../../../constants/constants";

const FavoritesContainer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        paddingTop: "40px",
        marginTop: "50px",
        ...baseSx(state),
      }}
    >
      {state.favs.map((dentist) => (
        <DentistCard key={dentist.id} dentist={dentist} />
      ))}
    </Box>
  );
};

export default FavoritesContainer;

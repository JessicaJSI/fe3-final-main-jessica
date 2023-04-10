import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import DentistCard from "../../Common/DentistCard/DentistCard";
import { Box } from "@mui/material";
import { SERVICE_URL, baseSx } from "../../../constants/constants";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getProfesionals = axios.get(SERVICE_URL);
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

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
      {state.users.map((user) => (
        <DentistCard key={user.id} dentist={user} />
      ))}
    </Box>
  );
};

export default ProfessionalsContainer;

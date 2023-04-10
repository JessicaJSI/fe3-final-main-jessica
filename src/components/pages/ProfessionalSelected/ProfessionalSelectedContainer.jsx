import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalContext";
import DentistCard from "../../Common/DentistCard/DentistCard";
import { SERVICE_URL } from "../../../constants/constants";

const ProfessionalSelectedContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(`${SERVICE_URL}/${id}`);
    getUser
      .then((res) => dispatch({ type: "GET_USER", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return <DentistCard key={state.user.id} dentist={state.user} detailed back />;
};

export default ProfessionalSelectedContainer;

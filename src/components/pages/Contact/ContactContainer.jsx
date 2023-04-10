import { useState } from "react";
import Contact from "./Contact";
import Swal from "sweetalert2";

const ContactContainer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const dispararAlerta = (name) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Gracias ${name} te contactaremos cuanto antes via email`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const dispararAlertaError = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Por favor verifique su información nuevamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = user.name.length > 5 && !user.name.startsWith(" ");
    const emailIsValid = user.email.includes("@");

    if (!emailIsValid || !nameIsValid) {
      dispararAlertaError();
    } else {
      dispararAlerta(user.name);
    }

    return;
  };

  return <Contact handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default ContactContainer;

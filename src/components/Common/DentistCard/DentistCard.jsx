import { React, useContext } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import GridWrapper from "../GridWrapper";
import { baseSx } from "../../../constants/constants";

const DentistCard = ({ dentist, detailed = false, back = false }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const labelAndValue = (label, value) => (
    <GridWrapper
      gridColumns={2}
      child={
        <>
          <Typography
            sx={baseSx(state)}
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
          >
            {`${label}:`}
          </Typography>
          <Typography sx={baseSx(state)} variant="body2" color="text.secondary">
            {value}
          </Typography>
        </>
      }
    />
  );

  const basicInfo = () => {
    return (
      <>
        {labelAndValue("Name", dentist.name)}
        {labelAndValue("User name", dentist.username)}
      </>
    );
  };

  const detailedInfo = () => {
    return (
      <>
        {basicInfo()}
        {labelAndValue("Email", dentist.email)}
        {labelAndValue("City", (dentist.address && dentist.address.city) || "")}
        {labelAndValue("Phone", dentist.phone)}
        {labelAndValue("Website", dentist.website)}
        {labelAndValue(
          "Company",
          (dentist.company && dentist.company.name) || ""
        )}
      </>
    );
  };

  return (
    <Card
      sx={{
        border: "2px",
        ...baseSx(state),
        maxWidth: "300px",
        maxHeight: "800px",
      }}
      key={dentist.id}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {(dentist.name && dentist.name.substring(0, 1)) || "R"}
          </Avatar>
        }
        title={dentist.name}
      />
      <Link to={`/dentista/${dentist.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={
            "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
          }
          alt="dentist photo"
        />
      </Link>
      <CardContent>{detailed ? detailedInfo() : basicInfo()}</CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() =>
            dispatch({ type: "HANDLE_FAVORITE", payload: dentist })
          }
        >
          <FavoriteIcon
            color={
              state.favs.some((fav) => fav.id === dentist.id)
                ? "error"
                : "disabled"
            }
          />
        </IconButton>
        {back ? (
          <Link to={"/dentistas"}>
            <Button variant="contained">Volver</Button>
          </Link>
        ) : (
          <Link to={`/dentista/${dentist.id}`}>
            <Button variant="contained">Ver detalle</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default DentistCard;

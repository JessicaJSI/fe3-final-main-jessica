import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  Stack,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { baseSx } from "../../../constants/constants";

const Contact = ({ handleSubmit, handleChange }) => {
  const { state } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 30px",
        ...baseSx(state),
      }}
    >
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              onChange={(e) => handleChange(e, "name")}
              label="Ingresa tu nombre"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              onChange={(e) => handleChange(e, "email")}
              label="Ingresa tu email"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </FormControl>
      <Stack spacing={2} sx={{ m: 1 }} direction="row">
        <Link to={"/dentistas"}>
          <Button>Cancelar</Button>
        </Link>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppBar, Box, Toolbar, Typography, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import HomeIcon from "@mui/icons-material/Home";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <HomeIcon fontSize="large" />
          <Typography variant="h6" pl={1} sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>

      <Box mt={3} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Typography variant="h1" align="center">
          MUI App
        </Typography>
        <Typography variant="subtitle1" align="justify" p={5}>
          This works great when the changes can be isolated to a new DOM
          element. For instance, you can change the margin this way. However,
          sometimes you have to target the underlying DOM element. As an
          example, you may want to change the border of the Button. The Button
          component defines its own styles. CSS inheritance doesn't help. To
          workaround the problem, you can use the sx prop directly on the child
          if it is a MUI component.
        </Typography>
      </Box>

      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography paragraph={true} align="justify">
            This works great when the changes can be isolated to a new DOM
            element. For instance, you can change the margin this way. However,
            sometimes you have to target the underlying DOM element. As an
            example, you may want to change the border of the Button. The Button
            component defines its own styles. CSS inheritance doesn't help. To
            workaround the problem, you can use the sx prop directly on the
            child if it is a MUI component.
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Declarative</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes. Declarative views make your code more
                predictable and easier to debug.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Component-Based</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs. Since component logic is
                written in JavaScript instead of templates, you can easily pass
                rich data through your app and keep state out of the DOM.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align="justify">
            This works great when the changes can be isolated to a new DOM
            element. For instance, you can change the margin this way. However,
            sometimes you have to target the underlying DOM element. As an
            example, you may want to change the border of the Button. The Button
            component defines its own styles. CSS inheritance doesn't help. To
            workaround the problem, you can use the sx prop directly on the
            child if it is a MUI component. This works great when the changes
            can be isolated to a new DOM element. For instance, you can change
            the margin this way. However, sometimes you have to target the
            underlying DOM element. As an example, you may want to change the
            border of the Button. The Button component defines its own styles.
            CSS inheritance doesn't help. To workaround the problem, you can use
            the sx prop directly on the child if it is a MUI component.
          </Typography>

          <FormControl>
            <FormLabel>Gender?</FormLabel>
            <RadioGroup row defaultValue="female" name="radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Stack direction="row" spacing={5} justifyContent="center">
        <Button variant="text">Click</Button>
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Register</Button>
        <Button disabled>Logout</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}

export default App;

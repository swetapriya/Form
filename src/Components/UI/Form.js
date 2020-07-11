import React,{Component} from "react";
import {Container,
        Grid,
        Button,
        TextField,
        FormLabel,
        RadioGroup,
        InputLabel,
        FormControlLabel,
        Radio,
        MenuItem,
        Select,

        makeStyles } from "@material-ui/core";

import { blue } from "@material-ui/core/colors";




export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      surName:'',
      email: '',
      emailErrorText: '',
      gender:'',
      telErrorText:'',
      telNum: '',
      foodOption:'',
      Open:false
    }
  }

   useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "75%",
      marginTop: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    placeholder: {
      height: 40,
      left: "50vw",
    },
    textField: {
      fontWeight: 500,
      backgroundColor: blue,
      minWidth: 120,
    },
    input: {
      color: "white",
    },
  }));
  validateEmail(e) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }
  _handleEmailChange(e, val) {
    var errorText = ''
    if (!this.validateEmail(val)) {
      errorText = "Email Format Error"
    }
    this.setState({emailErrorText: errorText, email: val})
  }


   handleFoodChange = (e) => {
    this.setState({foodOption:e.target.value});
  };

   handleClose = (e) => {
    this.setState({Open:false});
  };

   handleOpen = (e) => {
    this.setState({Open:true});
  };

  handleGenderChange = (e) => {
    this.setState({gender:e.target.value});
  };
  render(){
  const classes = useStyles();

  return (
    <Container className={classes.root} fixed>
        <form noValidate autoComplete="off">
        <Grid container spacing={1}
       >
        <Grid item sm={6} xs={12}>
            <TextField
                error
                id="filled-error"
                label="Enter your First name"
                variant="filled"
            />
        </Grid>
        <Grid item sm={6} xs={12}>
            <TextField
                error
                id="filled-error"
                label="Surname"
                variant="filled"
            />
        </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender"name="gender1"row  value={this.state.gender} onChange={this.handleGenderChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="Phonenumber"
                label="Phone-Number"
              />
              </Grid>
              <Grid item sm={6} xs={12}>
               <TextField
               error={this.state.errorText === ''?true:false}
                label="Email-id"
                value={this.state.email}
                errorText={this.state.emailErrorText}
                onChange={this._handleEmailChange.bind(this)}
                hintText="Email"
                floatingLabelText="Email"
                floatingLabelFixed={true}
              />
            </Grid>
            <Grid sm={6} xs={12}>
            <InputLabel id="lblFoodOption">Food Option</InputLabel>
              <Select
                labelId="lblFoodOption"
                labelWidth={20}
                id="idFoodOption"
                open={this.state.Open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.fontWeightfoodOption}
                onChange={this.handleFoodChange}
              >
                <MenuItem value="Veg">Veg</MenuItem>
                <MenuItem value="Non-Veg">Non-Veg</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Button size="large" color="primary" className={classes.button}>Submit</Button>
            </Grid>
        </form>
    </Container>
    );
              }
}


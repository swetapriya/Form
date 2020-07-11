import React, { useState }from "react";
import {
    Container,
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
import './Form.scss';

const useStyles = makeStyles((theme) => ({
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
        margin: theme.spacing(1),
    },
    radioField: {
        margin: theme.spacing(1),
    },
    input: {
        color: "white",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 165,
      },
  }));

function Form() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setemail] = useState('');
    const [emailErrorText, setemailErrorText] = useState('');
    const [emailError, setemailError] = useState(false);
    const [gender, setgender] = useState('');
    const [telErrorText, settelErrorText] = useState('');
    const [telNum, settelNum] = useState('');
    const [phoneError, setphoneError] = useState(false);
    const [foodOption, setfoodOption] = useState('');
    const [open, setOpen] = useState(false);

    const validateEmail = (value) =>{
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value);
    }

    const validatePhone = (value) =>{
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return regex.test(value);
    }

    const handleEmailChange = (event) => {
        var errorText = ''
        if (!validateEmail(event.target.value)) {
            errorText = "Email Format Error"
            setemailErrorText(errorText);
            setemailError(true);
        }else{
            setemail(event.target.value);
            setemailError(false);
        };   
    }

    const handlePhoneChange = (event) => {
        var errorText = ''
        if (!validatePhone(event.target.value)) {
            errorText = "Not a valid Phone number"
            settelErrorText(errorText);
            setphoneError(true);
        }else{
            settelNum(event.target.value);
            setphoneError(false);
        };   
    }

    const handleFoodChange = (e) => {
        setfoodOption(e.target.value);
    };

    const handleClose = (e) => {
        setOpen(false);
    };

    const handleOpen = (e) => {
        setOpen(true);
    };

    const handleGenderChange = (e) => {
        setgender(e.target.value);
    };

    const firstNameChange = (event) => {
        setfirstName(event.target.value)
    }

    const lastNameChange = (event) => {
        setlastName(event.target.value)
    }

    const dobChange = (event) => {
        setDob(event.target.value)
    }
    

    const classes = useStyles();
    return (
        <Container className={classes.root} fixed>
            <form noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="firstname"
                            label="First name"
                            onChange= {firstNameChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="lastname"
                            label="Last name"
                            onChange= {lastNameChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            className={classes.textField}
                            onChange={dobChange}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <FormLabel component="legend" className={classes.radioField}>Gender</FormLabel>
                        <RadioGroup aria-label="gender"name="gender1"row  value={gender} onChange={handleGenderChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Female" />
                            <FormControlLabel value="female" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="Phonenumber"
                            label="Phone-Number"
                            error={phoneError}
                            helperText={phoneError ? telErrorText : ''}
                            onChange={(event)=>handlePhoneChange(event)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            error={emailError}
                            id="email"
                            helperText={emailError ? emailErrorText : ''}
                            label="Email-id"
                            onChange={(event)=>handleEmailChange(event)}
                        /> 
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.formControl}>
                        <InputLabel id="lblFoodOption">Food Option</InputLabel>
                        <Select
                            labelId="lblFoodOption"
                            id="idFoodOption"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={foodOption}
                            onChange={handleFoodChange}
                        >
                            <MenuItem value="Veg">Veg</MenuItem>
                            <MenuItem value="Non-Veg">Non-Veg</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid  
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Button variant="contained" size="large" color="primary" className={classes.button} disableElevation>Submit</Button>
                </Grid>
            </form>
        </Container>
    );
}

export default Form;
import React, { useState, Suspense, lazy }from "react";
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
    makeStyles,
    LinearProgress } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import './Form.scss';
const UserList = lazy(() => import("./UserList"));

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
    const [userDetails, setUserDetails] = useState([]);
    const [clearBtnDisable,setClearBtnDisable] =useState(true);
    const [submitBtnDisable,setSubmitBtnDisable]=useState(true);
    const [loading, setLoading] = React.useState(false);

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
        setemail(event.target.value);
        if (!validateEmail(event.target.value)) {
            errorText = "Email Format Error"
            setemailErrorText(errorText);
            setemailError(true);
        }else{
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
        setfirstName(event.target.value);
    }

    const lastNameChange = (event) => {
        setlastName(event.target.value);
    }

    const dobChange = (event) => {
        setDob(event.target.value)
    }
    const handelClear = (event) =>{
        setgender('');
        setDob('');
        setlastName('');
        setfirstName('');
        setfoodOption('');
        settelNum('');
        setemail('');
    }
    const isAllDetailNotPresent = telNum.length === 0 ||
    email.length === 0 ||
    firstName.length === 0 ||
    lastName.length === 0 ||
    dob.length === 0 || foodOption.length === 0 || gender.length === 0;

    const validateInputs = (event) => {
        event.preventDefault();
        
        let isValid = true;
        setClearBtnDisable(true)
        if (
            isAllDetailNotPresent
        ) {
          isValid = false;
        } else {
          isValid = true;
        }
    
        if (isValid) {
            setClearBtnDisable(false);
            handleSaveData();
        }
      };
      const handleSaveData = () => {
          const userDetail = {FirstName:firstName,
                               LastName:lastName,
                               Email:email,
                               TelNumber:telNum,
                               DateOfBirth:dob,
                               Gender:gender,
                               FoodOption:foodOption
                            }
        setUserDetails([...userDetails,userDetail]);
      };

    const handelFormChange =() =>{
        if (isAllDetailNotPresent){
            setSubmitBtnDisable(true)
        }else{setSubmitBtnDisable(false)}
    }
    const classes = useStyles();
    return (
        <Container className={classes.root} fixed>
            <form noValidate autoComplete="off" onSubmit={validateInputs} onChange={handelFormChange}>
                <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="firstname"
                            label="First name"
                            value={firstName}
                            onChange= {firstNameChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="lastname"
                            label="Last name"
                            value={lastName}
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
                            value={dob}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <FormLabel component="legend" className={classes.radioField}>Gender</FormLabel>
                        <RadioGroup aria-label="gender"name="gender1"row  value={gender} onChange={handleGenderChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="Phonenumber"
                            label="Phone-Number"
                            value={telNum}
                            error={phoneError}
                            helperText={phoneError ? telErrorText : ''}
                            onChange={(event)=>handlePhoneChange(event)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            error={emailError}
                            value={email}
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
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                <Button variant="contained" size="large" color="primary" type="submit" className={classes.button} disableElevation disabled={submitBtnDisable}>Submit</Button>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                 >            
                    <Button
                        id="btnClear"
                        size="large"
                        className={classes.button}
                        onClick={handelClear}
                        variant="contained" 
                        disabled={clearBtnDisable}
                    >
                    Clear
                    </Button>
                </Grid>
            </form>
            <div id="results">
        <Suspense
          fallback={
            <div className={classes.placeholder}>
              {loading ? <LinearProgress /> : ""}
            </div>
          }
        >
          {userDetails ? (
            userDetails.map((resultItem) => {
              return (
                <UserList
                  key={`key-${resultItem.email}`}
                  data={resultItem}
                />
              );
            })
          ) : (
            <div>No items found</div>
          )}
        </Suspense>
      </div>
        </Container>
    );
}

export default Form;
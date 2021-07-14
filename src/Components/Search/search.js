import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-styles";

const Search = (props) => {
  const [state, setState] = useState(null);
  const classes = useStyles();
  console.log(state)
  return (
    <Fragment>
      <Box display="flex" className={classes.searchBoxContainer}>
        <Box style={{ width: 150 }} className={classes.searchbox}>
          <Autocomplete
          value = {state}
          onChange = {(event, newValue) => {
            if (typeof newValue === 'string') {
              setState( newValue )}}}
            onChange={(_, value) => setState(value)}
            id="free-solo-demo"
            options={bloodGroups.map((option) => option.bloodType)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Blood Group"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box style={{ width: 300 }}>
          <Autocomplete
            onChange={(_, value) => setState(value)}
            id="free-solo-demo"
            options={cities.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Button
          variant="oulined"
          color="primary"
          size="large"
          // className={classes.button}
          startIcon={<SearchIcon />}
        >
          Find
        </Button>
      </Box>
    </Fragment>
  );
};

export default Search;

const bloodGroups = [
  { bloodType: "A+" },
  { bloodType: "A-" },
  { bloodType: "B+" },
  { bloodType: "B-" },
  { bloodType: "O+" },
  { bloodType: "O-" },
  { bloodType: "AB+" },
  { bloodType: "AB+" },
];

const cities = [
  "Ahmadpur East",
  "Ahmed Nager Chatha",
  "Ali Khan Abad",
  "Alipur",
  "Arifwala",
  "Attock",
  "Bhera",
  "Bhalwal",
  "Bahawalnagar",
  "Bahawalpur",
  "Bhakkar",
  "Burewala",
  "Chenab Nagar",
  "Chillianwala",
  "Choa Saidanshah",
  "Chakwal",
  "Chak Jhumra",
  "Chichawatni",
  "Chiniot",
  "Chishtian",
  "Chunian",
  "Dajkot",
  "Daska",
  "Davispur",
  "Darya Khan",
  "Dera Ghazi Khan",
  "Dhaular",
  "Dina",
  "Dinga",
  "Dhudial Chakwal",
  "Dipalpur",
  "Faisalabad",
  "Fateh Jang",
  "Ghakhar Mandi",
  "Gojra",
  "Gujranwala",
  "Gujrat",
  "Gujar Khan",
  "Harappa",
  "Hafizabad",
  "Haroonabad",
  "Hasilpur",
  "Haveli Lakha",
  "Islamabad",
  "Jalalpur Jattan",
  "Jampur",
  "Jaranwala",
  "Jhang",
  "Jhelum",
  "Jauharabad",
  "Kallar Syedan",
  "Kalabagh",
  "Karor Lal Esan",
  "Karachi",
  "Kasur",
  "Kamalia",
  "Kāmoke",
  "Khanewal",
  "Khanpur",
  "Khanqah Sharif",
  "Kharian",
  "Khushab",
  "Kot Adu",
  "Lahore",
  "Lalamusa",
  "Layyah",
  "Lawa Chakwal",
  "Liaquat Pur",
  "Lodhran",
  "Malakwal",
  "Mamoori",
  "Mailsi",
  "Mandi Bahauddin",
  "Mian Channu",
  "Mianwali",
  "Miani",
  "Multan",
  "Murree",
  "Muridke",
  "Mianwali Bangla",
  "Muzaffargarh",
  "Narowal",
  "Nankana Sahib",
  "Okara",
  "Pakpattan",
  "Pattoki",
  "Pindi Bhattian",
  "Pind Dadan Khan",
  "Pir Mahal",
  "Qaimpur",
  "Qila Didar Singh",
  "Raiwind",
  "Rajanpur",
  "Rahim Yar Khan",
  "Rawalpindi",
  "Renala Khurd",
  "Sadiqabad",
  "Sagri",
  "Sahiwal",
  "Sambrial",
  "Samundri",
  "Sangla Hill",
  "Sarai Alamgir",
  "Sargodha",
  "Shakargarh",
  "Sheikhupura",
  "Shujaabad",
  "Sialkot",
  "Sohawa",
  "Soianwala",
  "Siranwali",
  "Tandlianwala",
  "Talagang",
  "Taxila",
  "Toba Tek Singh",
  "Vehari",
  "Wah Cantonment",
  "Wazirabad",
  "Yazman",
  "Zafarwal",
];

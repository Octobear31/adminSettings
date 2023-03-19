import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  FormHelperText,
  FormControl,
  useFormControl,
  TextField,
  InputLabel,
  FormLabel,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Input from "./Input";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const [formData, setFormData] = React.useState({});

  function handleInputValue(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="General"
          icon={<SettingsIcon />}
          iconPosition="start"
          {...a11yProps(0)}
        />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FormControl sx={{ width: "25ch" }}>
          <FormLabel name="name">YouTube API Key</FormLabel>
          <TextField
            fullWidth
            id="fullWidth"
            name="youtubeApiKey"
            value={formData.youtubeApiKey}
            onChange={handleInputValue}
          />
          <FormHelperText>Insert your Youtube API key</FormHelperText>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormControl sx={{ width: "25ch" }}>
          <FormLabel name="name">Video Per Page</FormLabel>
          <TextField
            fullWidth
            id="fullWidth"
            name="videoPerPage"
            value={formData.videoPerPage}
            onChange={handleInputValue}
          />
          <FormHelperText>Insert your Youtube API key</FormHelperText>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>{JSON.stringify(formData)}</p>
      </TabPanel>
    </Box>
  );
}

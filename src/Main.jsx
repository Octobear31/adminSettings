import {useEffect, useState} from "react";
import {
    Tabs,
    Tab,
    Box,
    FormHelperText,
    FormControl,
    TextField,
    FormLabel,
    Button
} from "@mui/material";
import TabPanel from "./TabPanel";
import SettingsIcon from "@mui/icons-material/Settings";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData({currentTab: 0, videoPerPage: '', youtubeApiKey: ''});
        setIsLoading(false);
    }, []);

    function handleInputValue(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    const handleTabChange = (event, newValue) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                currentTab: newValue,
            };
        });
    };

    const handleSaveSettings = () => {
        console.log(JSON.stringify(formData));
    }

    if (isLoading) {
        return (
            <div>Loader...</div>
        );
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
            }}
        >
            <Tabs
                orientation="vertical"
                value={formData.currentTab}
                onChange={handleTabChange}
                aria-label="Vertical tabs example"
                sx={{borderRight: 1, borderColor: "divider"}}
            >
                <Tab
                    label="General"
                    icon={<SettingsIcon/>}
                    iconPosition="start"
                    {...a11yProps(0)}
                />
                <Tab label="Item Three" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={formData.currentTab} index={0}>
                <FormControl>
                    <FormLabel htmlFor="youtubeApiKey" name="name">YouTube API Key</FormLabel>
                    <div className="input-area">
                        <TextField
                            fullWidth={false}
                            id="youtubeApiKey"
                            name="youtubeApiKey"
                            value={formData.youtubeApiKey}
                            onChange={handleInputValue}
                            placeholder="Enter API key"
                            size="small"
                        />
                        <FormHelperText>Insert your YouTube API key.</FormHelperText>
                    </div>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="videoPerPage" name="name">Video Per Page</FormLabel>
                    <div className="input-area">
                        <TextField
                            fullWidth={false}
                            id="videoPerPage"
                            name="videoPerPage"
                            value={formData.videoPerPage}
                            onChange={handleInputValue}
                            size="small"
                            type="number"
                        />
                        <FormHelperText>Insert your Youtube API key</FormHelperText>
                    </div>
                </FormControl>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleSaveSettings}
                >
                    Save changes
                </Button>
            </TabPanel>
            <TabPanel value={formData.currentTab} index={1} sx={{width: '100%'}}>
                {JSON.stringify(formData)}
            </TabPanel>
        </Box>
    );
}

import {Tab, ThemeProvider} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import {useState} from "react";
import theme from "../../../../config/theme";

const NavigationCard = ({active}) => {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <div className={'flex pt-5 bg-white border-neutral-200 sticky -top-5'}>
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} sx={{
                        marginX: 'auto',
                    }} >
                        <Tab label="About" value={1}  />
                        <Tab label="Related" value={2} />
                        <Tab label="Reviews" value={3} />
                    </TabList>

                </TabContext>
            </ThemeProvider>
        </div>
    )
}

export default NavigationCard;
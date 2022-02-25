import {FormControl, Box, Button, TextField} from "@material-ui/core";
import {Email, VpnKey} from "@material-ui/icons";
export default function Form(){
    return(
            <FormControl>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px'}}>
                    <Email  />
                    <TextField 
                    id="input-with-sx" 
                    label="Email" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
                    <VpnKey sx={{paddingRight: '50px'}}/>
                    <TextField id="input-with-sx" type="password" label="Password" variant="standard" />
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                    <Button variant="contained" color="primary" sx={{width: '100%'}} >Log in</Button>
                </Box>
            </FormControl>

    );
}
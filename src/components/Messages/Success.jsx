import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
function Success(props) {
    const [open, setOpen] = React.useState();
    setOpen(props.show);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {props.messageType}
                </Alert>
                {console.log(props.show)}
            </Snackbar>
        </div>
    )
}

export default Success

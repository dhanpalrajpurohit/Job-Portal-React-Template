import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
function Success(props) {
    return (
        <div>
            <Snackbar autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Success

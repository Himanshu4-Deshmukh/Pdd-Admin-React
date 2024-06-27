import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { TextField, MenuItem, Select, FormControl, InputLabel, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'white'
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ backgroundColor: 'blue', color: 'white' }} onClick={handleOpen}>
        Add New Vehicle
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            X
          </IconButton>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>User</InputLabel>
                  <Select label="User">
                    {/* Add MenuItems for user options here */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Company</InputLabel>
                  <Select label="Company">
                    {/* Add MenuItems for company options here */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Registration No." variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Model" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Date of Manufacture" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Date of Registration" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Manufactured By" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="RC Upload" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fitness Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fitness Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fitness Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Permit Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Permit Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Permit Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Insurance Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Insurance Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Insurance Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Speed Limit Device Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Speed Limit Device Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Speed Limit Device Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Reflective Tape Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Reflective Tape Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Reflective Tape Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Road Tax Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Road Tax Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Road Tax Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Pollution Issue Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Pollution Expiry Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Pollution Document" type="file" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

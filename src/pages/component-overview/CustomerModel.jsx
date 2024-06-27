import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { TextField, MenuItem, Select, FormControl, InputLabel, FormHelperText, Grid } from '@mui/material';

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
        Add New Customer
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
            {/* <CloseIcon /> */}X
          </IconButton>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Assign Users</InputLabel>
                  <Select label="Assign Users">{/* Add MenuItems for user options here */}</Select>
                  <FormHelperText>Select users to assign</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="I am" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Date of Joining" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Contact No" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Alt-Contact (Optional)" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Designation" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Report To" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Location" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Role" defaultValue="admin@gaadiwalaonline.com" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" type="password" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Employee Type</InputLabel>
                  <Select label="Employee Type">
                    <MenuItem value="full-time">Full-Time</MenuItem>
                    <MenuItem value="part-time">Part-Time</MenuItem>
                    <MenuItem value="contractor">Contractor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  id="upload-image"
                  type="file"
                  style={{ display: 'none' }}
                  // You can handle file upload logic here
                />
                <label htmlFor="upload-image">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                </label>
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

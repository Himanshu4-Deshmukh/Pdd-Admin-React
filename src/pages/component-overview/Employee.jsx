// material-ui
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import EmployeeTable from './EmployeeTable';
import EmployeeModel from './EmployeeModel';

// project import
import MainCard from 'components/MainCard';
// import ComponentSkeleton from './ComponentSkeleton';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

export default function ComponentEmployee() {
  return (
    <Grid item xs={12} md={7} lg={12}>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* <Grid item>
          <Typography variant="h5">Recent Orders</Typography>
        </Grid> */}
        <Grid item />
      </Grid>
        <EmployeeModel/>
      <MainCard sx={{ mt: 2 }} content={false}>
        <EmployeeTable />
      </MainCard>
    </Grid>
  );
}

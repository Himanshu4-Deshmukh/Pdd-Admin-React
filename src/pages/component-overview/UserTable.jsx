import * as React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

function createData(slNo, companyName, image, username, email, mobile, gender, type, created, vehicles, account, view, edit) {
  return { slNo, companyName, image, username, email, mobile, gender, type, created, vehicles, account, view, edit };
}

const rows = [
  createData(1, 'Company A', 'Camera.jpg', 'EMP001', 'john@example.com', '1234567890', 'Male', 'Admin', '2023-01-01', 5, 'Active', 'VIEW', 'EDIT'),
  createData(2, 'Company B', 'Laptop.jpg', 'EMP002', 'alice@example.com', '2234567890', 'Female', 'User', '2023-02-01', 3, 'Inactive', 'VIEW', 'EDIT'),
  createData(3, 'Company C', 'Mobile.jpg', 'EMP003', 'charlie@example.com', '3234567890', 'Male', 'User', '2023-03-01', 8, 'Active', 'VIEW', 'EDIT'),
  createData(4, 'Company D', 'Handset.jpg', 'EMP004', 'eve@example.com', '4234567890', 'Female', 'Admin', '2023-04-01', 2, 'Active', 'VIEW', 'EDIT'),
  createData(5, 'Company E', 'Accessories.jpg', 'EMP005', 'grace@example.com', '5234567890', 'Female', 'User', '2023-05-01', 4, 'Inactive', 'VIEW', 'EDIT'),
];

const headCells = [
  { id: 'slNo', align: 'left', disablePadding: false, label: 'Sl.No.' },
  { id: 'companyName', align: 'left', disablePadding: true, label: 'COMPANY NAME' },
  { id: 'image', align: 'left', disablePadding: false, label: 'IMAGE' },
  { id: 'username', align: 'right', disablePadding: false, label: 'USERNAME' },
  { id: 'email', align: 'left', disablePadding: false, label: 'EMAIL' },
  { id: 'mobile', align: 'left', disablePadding: false, label: 'MOBILE' },
  { id: 'gender', align: 'left', disablePadding: false, label: 'GENDER' },
  { id: 'type', align: 'left', disablePadding: false, label: 'TYPE' },
  { id: 'created', align: 'left', disablePadding: false, label: 'CREATED' },
  { id: 'vehicles', align: 'left', disablePadding: false, label: 'VEHICLES' },
  { id: 'account', align: 'left', disablePadding: false, label: 'ACCOUNT' },
  { id: 'view', align: 'left', disablePadding: false, label: 'VIEW' },
  { id: 'edit', align: 'left', disablePadding: false, label: 'EDIT' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function UserTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'slNo';

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <UserTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.slNo}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary"> {row.slNo}</Link>
                  </TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>{row.vehicles}</TableCell>
                  <TableCell>{row.account}</TableCell>
                  <TableCell>
                    <Link href="#">{row.view}</Link>
                  </TableCell>
                  <TableCell>
                    <Link href="#">{row.edit}</Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

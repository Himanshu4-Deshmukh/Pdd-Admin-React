import * as React from 'react';
import PropTypes from 'prop-types';
// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// Project import
import Dot from 'components/@extended/Dot';

function createData(tracking_no, image, employee_id, name, contact, email, address, designation, role, status) {
  return { tracking_no, image, employee_id, name, contact, email, address, designation, role, status };
}

const rows = [
  createData(1, 'Camera.jpg', 'EMP001', 'John Doe', '1234567890', 'john@example.com', '123 Street, City', 'Manager', 'Admin', 0),
  createData(2, 'Laptop.jpg', 'EMP002', 'Alice Smith', '2234567890', 'alice@example.com', '456 Street, City', 'Developer', 'User', 1),
  createData(3, 'Mobile.jpg', 'EMP003', 'Charlie Brown', '3234567890', 'charlie@example.com', '789 Street, City', 'Designer', 'User', 2),
  createData(4, 'Handset.jpg', 'EMP004', 'Eve Black', '4234567890', 'eve@example.com', '101 Street, City', 'Support', 'Admin', 1),
  createData(5, 'Accessories.jpg', 'EMP005', 'Grace White', '5234567890', 'grace@example.com', '202 Street, City', 'HR', 'User', 0),
];

const headCells = [
  { id: 'tracking_no', align: 'left', disablePadding: false, label: 'Sl.No.' },
  { id: 'image', align: 'left', disablePadding: true, label: 'IMAGE' },
  { id: 'employee_id', align: 'left', disablePadding: false, label: 'EMPLOYEE ID' },
  { id: 'name', align: 'right', disablePadding: false, label: 'NAME' },
  { id: 'contact', align: 'left', disablePadding: false, label: 'CONTACT' },
  { id: 'email', align: 'left', disablePadding: false, label: 'EMAIL ID' },
  { id: 'address', align: 'left', disablePadding: false, label: 'ADDRESS' },
  { id: 'designation', align: 'left', disablePadding: false, label: 'DESIGNATION' },
  { id: 'role', align: 'left', disablePadding: false, label: 'ROLE' },
  { id: 'status', align: 'left', disablePadding: false, label: 'STATUS' },
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

function OrderTableHead({ order, orderBy }) {
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

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

OrderStatus.propTypes = { status: PropTypes.number };

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'tracking_no';

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
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary"> {row.tracking_no}</Link>
                  </TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell>{row.employee_id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell>
                    <Link href="#">VIEW</Link>
                  </TableCell>
                  <TableCell>
                    <Link href="#">EDIT</Link>
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

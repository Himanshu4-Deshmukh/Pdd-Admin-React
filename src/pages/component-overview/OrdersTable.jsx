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

function createData(tracking_no, image, name, email, owner_name, owner_no, contact_name, contact_no, status) {
  return { tracking_no, image, name, email, owner_name, owner_no, contact_name, contact_no, status };
}

const rows = [
  createData(1, 'Camera.jpg', 'Camera Lens', 'camera@example.com', 'John Doe', '1234567890', 'Jane Doe', '0987654321', 0),
  createData(2, 'Laptop.jpg', 'Lap-top', 'laptop@example.com', 'Alice Smith', '2234567890', 'Bob Smith', '1987654321', 1),
  createData(3, 'Mobile.jpg', 'Mobile', 'mobile@example.com', 'Charlie Brown', '3234567890', 'David Brown', '2987654321', 2),
  createData(4, 'Handset.jpg', 'Handset', 'handset@example.com', 'Eve Black', '4234567890', 'Frank Black', '3987654321', 1),
  createData(5, 'Accessories.jpg', 'Computer Accessories', 'accessories@example.com', 'Grace White', '5234567890', 'Hank White', '4987654321', 0),
];

const headCells = [
  { id: 'tracking_no', align: 'left', disablePadding: false, label: 'Sl.No.' },
  { id: 'image', align: 'left', disablePadding: true, label: 'Image' },
  { id: 'name', align: 'right', disablePadding: false, label: 'NAME' },
  { id: 'email', align: 'left', disablePadding: false, label: 'EMAIL' },
  { id: 'owner_name', align: 'right', disablePadding: false, label: 'OWNER NAME' },
  { id: 'owner_no', align: 'right', disablePadding: false, label: 'OWNER NO' },
  { id: 'contact_name', align: 'right', disablePadding: false, label: 'CONTACT NAME' },
  { id: 'contact_no', align: 'right', disablePadding: false, label: 'CONTACT NO' },
  { id: 'status', align: 'right', disablePadding: false, label: 'STATUS' },
  { id: 'view', align: 'right', disablePadding: false, label: 'VIEW' },
  { id: 'edit', align: 'right', disablePadding: false, label: 'EDIT' },
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
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align="right">{row.owner_name}</TableCell>
                  <TableCell align="right">{row.owner_no}</TableCell>
                  <TableCell align="right">{row.contact_name}</TableCell>
                  <TableCell align="right">{row.contact_no}</TableCell>
                  <TableCell align="right">
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align="right">
                    <Link href="#">VIEW</Link>
                  </TableCell>
                  <TableCell align="right">
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

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

function createData(tracking_no, company_name, user, registration_no, model, manufactured_by, manufactured_date, registration_date, status) {
  return { tracking_no, company_name, user, registration_no, model, manufactured_by, manufactured_date, registration_date, status };
}

const rows = [
  createData(1, 'ABC Corp', 'John Doe', 'REG001', 'Model X', 'Manufacturer A', '2020-01-01', '2021-01-01', 0),
  createData(2, 'XYZ Ltd', 'Alice Smith', 'REG002', 'Model Y', 'Manufacturer B', '2019-01-01', '2020-01-01', 1),
  createData(3, 'LMN Inc', 'Charlie Brown', 'REG003', 'Model Z', 'Manufacturer C', '2018-01-01', '2019-01-01', 2),
  createData(4, 'OPQ LLC', 'Eve Black', 'REG004', 'Model A', 'Manufacturer D', '2017-01-01', '2018-01-01', 1),
  createData(5, 'RST Ltd', 'Grace White', 'REG005', 'Model B', 'Manufacturer E', '2016-01-01', '2017-01-01', 0),
];

const headCells = [
  { id: 'tracking_no', align: 'left', disablePadding: false, label: 'Sl.No.' },
  { id: 'company_name', align: 'left', disablePadding: false, label: 'COMPANY NAME' },
  { id: 'user', align: 'left', disablePadding: false, label: 'USER' },
  { id: 'registration_no', align: 'left', disablePadding: false, label: 'REGISTRATION NO' },
  { id: 'model', align: 'left', disablePadding: false, label: 'MODEL' },
  { id: 'manufactured_by', align: 'left', disablePadding: false, label: 'MANUFACTURED BY' },
  { id: 'manufactured_date', align: 'left', disablePadding: false, label: 'MANUFACTURED DATE' },
  { id: 'registration_date', align: 'left', disablePadding: false, label: 'REGISTRATION DATE' },
  { id: 'status', align: 'left', disablePadding: false, label: 'ASSIGN' },
  { id: 'track', align: 'left', disablePadding: false, label: 'TRACK' },
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
                  <TableCell>{row.company_name}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.registration_no}</TableCell>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.manufactured_by}</TableCell>
                  <TableCell>{row.manufactured_date}</TableCell>
                  <TableCell>{row.registration_date}</TableCell>
                  <TableCell>
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell>
                    <Link href="#">TRACK</Link>
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

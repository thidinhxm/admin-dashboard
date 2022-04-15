import classes from './Table.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';

const List = () => {
  const rows = [
    {
      id: 1,
      product: 'Product 1',
      img: 'https://via.placeholder.com/150',
      customer: 'Customer 1',
      date: '01/01/2019',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved'
    },
    {
      id: 2,
      product: 'Product 2',
      img: 'https://via.placeholder.com/150',
      customer: 'Customer 2',
      date: '01/01/2019',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved'
    },
    {
      id: 3,
      product: 'Product 3',
      img: 'https://via.placeholder.com/150',
      customer: 'Customer 3',
      date: '01/01/2019',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Pending'
    },

  ];

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Tracking ID</TableCell>
            <TableCell className={classes.tableCell}>Product</TableCell>
            <TableCell className={classes.tableCell}>Customer</TableCell>
            <TableCell className={classes.tableCell}>Date</TableCell>
            <TableCell className={classes.tableCell}>Amount</TableCell>
            <TableCell className={classes.tableCell}>Payment Method</TableCell>
            <TableCell className={classes.tableCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className={classes.tableCell}>{row.id}</TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.cellWrapper}>
                  <img src={row.img} alt="" className={classes.image}/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>{row.customer}</TableCell>
              <TableCell className={classes.tableCell}>{row.date}</TableCell>
              <TableCell className={classes.tableCell}>{row.amount}</TableCell>
              <TableCell className={classes.tableCell}>{row.method}</TableCell>
              <TableCell className={classes.tableCell}>
                <span className={clsx(classes.status, classes[row.status])}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
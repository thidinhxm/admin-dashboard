import classes from './DataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';

const DataTable = () => {
  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return (
          <div className={classes.cellAction}>
            <div className={classes.viewButton}>View</div>
            <div className={classes.deleteButton}>Delete</div>
          </div>
        );
      }
    }
  ];

  return (
    <div className={classes.dataTable}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
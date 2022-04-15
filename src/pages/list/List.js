import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from '../../components/dataTable/DataTable';
import classes from './List.module.scss';

const List = () => {
  return (
    <div className={classes.list}>
      <Sidebar />
      <div className={classes.listContainer}>
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List
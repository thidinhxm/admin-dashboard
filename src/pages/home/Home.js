import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.homeContainer}>
        <Navbar />
        <div className={classes.widgets}>
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>
        </div>

        <div className={classes.charts}>
          <Featured />
          <Chart aspect={2 / 1} title="Last 12 Months (Revenue)"/>
        </div>
        <div className={classes.listContainer}>
          <div className={classes.listTitle}>Lastest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
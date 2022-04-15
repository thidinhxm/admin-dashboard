import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
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
      </div>
    </div>
  )
}

export default Home
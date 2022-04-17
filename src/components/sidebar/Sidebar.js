import classes from './Sidebar.module.scss';
import { 
  Dashboard, PersonOutline, Store, CreditCard, 
  LocalShipping, InsertChart, NotificationsNone,
  SettingsSystemDaydreamOutlined, PsychologyOutlined,
  SettingsApplications, AccountCircleOutlined, ExitToApp
} from '@mui/icons-material';

import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <Link 
          to='/' 
          className={classes.link}
        >
          <span className={classes.logo}>thiadmin</span>
        </Link>
      </div>
      <hr />
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <Link
            to='/' 
            className={classes.link}
          >
            <li>
              <Dashboard className={classes.icon}/> 
              <span>Dashboard</span>
            </li>
          </Link>
         
          <p className={classes.title}>LIST</p>
          <Link 
            to='/users'
            className={classes.link}
          >
            <li>
              <PersonOutline className={classes.icon}/>
              <span>Users</span>
            </li>
          </Link>
          <Link 
            to='/products'
            className={classes.link}
          >
            <li>
              <Store className={classes.icon}/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className={classes.icon}/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className={classes.icon}/>
            <span>Delivery</span>
          </li>
          <p className={classes.title}>USEFULL</p>
          <li>
            <InsertChart className={classes.icon}/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className={classes.icon}/>
            <span>Notifications</span>
          </li>
          <p className={classes.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className={classes.icon}/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className={classes.icon}/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className={classes.icon} />
            <span>Settings</span>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <AccountCircleOutlined className={classes.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className={classes.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <div className={classes.colorOption}></div>
        <div className={classes.colorOption}></div>
      </div>
    </div>
  )
}

export default Sidebar
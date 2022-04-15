import classes from './Navbar.module.scss';
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ListOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type="text" placeholder='Search...'/>
          <SearchOutlined />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <LanguageOutlined className={classes.icon} />
            English
          </div>
          <div className={classes.item}>
            <DarkModeOutlined className={classes.icon} />
          </div>
          <div className={classes.item}>
            <FullscreenExitOutlined className={classes.icon} />
          </div>
          <div className={classes.item}>
            <NotificationsNoneOutlined className={classes.icon} />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <ChatBubbleOutlineOutlined className={classes.icon} />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <ListOutlined className={classes.icon} />
          </div>
          <div className={classes.item}>
            <img 
              src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2022/03/13/hoi-gai-xinh-goi-cam-noi-gi-truoc-ap-luc-mac-sexy-la-hu-hongdocx-1647188022424.jpeg" 
              alt="" 
              className={classes.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
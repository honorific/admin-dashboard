import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreIcon from '@mui/icons-material/Store'
import PaymentIcon from '@mui/icons-material/Payment'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Admin Dashboard</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products</span>
          </li>
          <li>
            <PaymentIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar

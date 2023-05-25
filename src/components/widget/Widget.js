import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

const Widget = ({type}) => {
  let data

  //temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlinedIcon className='icon' />,
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: true,
        link: 'View net earnings',
        icon: <ShoppingCartOutlinedIcon className='icon' />,
      }
      break

    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: false,
        link: 'View all orders',
        icon: <MonetizationOnOutlinedIcon className='icon' />,
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceWalletOutlinedIcon className='icon' />,
      }
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        <PersonOutlinedIcon className='icon' />
      </div>
    </div>
  )
}

export default Widget
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add new user</h1>
        </div>
        <div className='bottom'>
          <div className='left'>left</div>
          <div className='right'>right</div>
        </div>
      </div>
    </div>
  )
}

export default New

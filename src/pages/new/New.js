import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'

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
          <div className='left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <label htmlfor='file'>
                <DriveFolderUploadIcon />
              </label>
              <input type='file' id='file'></input>
              <div className='formInput'>
                <label>UserName</label>
                <input type='text' placeholder='john_doe' />
              </div>
              <div className='formInput'>
                <label>Name and surname</label>
                <input type='text' placeholder='John doe' />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder='john@example.com' />
              </div>
              <div className='formInput'>
                <label>Phone number</label>
                <input type='text' placeholder='+1 234 567 89' />
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password' />
              </div>
              <div className='formInput'>
                <label>Adress</label>
                <input type='text' placeholder='Elton st. 216 New york' />
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='USA' />
              </div>
              <button>send button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New

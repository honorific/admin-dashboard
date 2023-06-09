import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'

const New = ({inputs, title}) => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
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
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input type='file' id='file' style={{display: 'none'}}></input>
              </div>
              {inputs.map((input) => {
                return (
                  <div className='formInput' key={input.id}>
                    <label htmlFor='file'>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )
              })}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New

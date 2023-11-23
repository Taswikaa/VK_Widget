import { useEffect } from 'react'
import './Widget.css'
import { api } from '../../api/api'

const Widget = () => {

  useEffect(() => {
    api.getGroupId(186103254);
  }, [])

  function handleScroll() {
    console.log(123);
  }

  function getData() {
    api.getPosts(0);
  }

  return (
    <div className='widget widget_size_small' onScroll={handleScroll} onClick={getData}>
      <div className='post'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat nihil corporis dicta commodi, soluta blanditiis rerum, consequuntur inventore delectus ipsum rem eligendi, velit neque ipsam earum nostrum architecto voluptatibus?</p>
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='post'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat nihil corporis dicta commodi, soluta blanditiis rerum, consequuntur inventore delectus ipsum rem eligendi, velit neque ipsam earum nostrum architecto voluptatibus?</p>
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='post'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat nihil corporis dicta commodi, soluta blanditiis rerum, consequuntur inventore delectus ipsum rem eligendi, velit neque ipsam earum nostrum architecto voluptatibus?</p>
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='post'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat nihil corporis dicta commodi, soluta blanditiis rerum, consequuntur inventore delectus ipsum rem eligendi, velit neque ipsam earum nostrum architecto voluptatibus?</p>
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='post'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat nihil corporis dicta commodi, soluta blanditiis rerum, consequuntur inventore delectus ipsum rem eligendi, velit neque ipsam earum nostrum architecto voluptatibus?</p>
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Widget
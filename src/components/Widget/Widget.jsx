import { useEffect, useState } from 'react'
import './Widget.css'
import { api } from '../../api/api'
import likeImg from '../../img/like.svg'
import dateImg from '../../img/date.svg'
import repostImg from '../../img/repost.svg'
import viewImg from '../../img/view.svg'
import { transformDate } from '../../utils/utils'

const Widget = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getGroupId(101391911);
  }, [])

  function handleScroll() {
    // console.log(123);
  }

  function getData() {
    api.getPosts(0)
    .then(res => {
      console.log(res.response);
      setPosts(res.response.items);
    })
    .finally(() => console.log(posts))
  }

  return (
    <div className='widget widget_size_small' onScroll={handleScroll} onClick={getData}>
      {
        posts.length && posts.map(post => {
          return (
            <div className="post" key={post.id}>
              {
                post.text && <p className='post__text'>
                  {post.text}
                </p>
              }
              {
                post.attachments.length && post.attachments[0].photo ? <img src={post.attachments[0].photo.sizes[1].url} alt="" /> : null
              }
              <div className="post__advanced-data">
                <div className="post__items-count">
                  <img className='post__icon' src={likeImg} alt="" />
                  <p className="count">
                    {post.likes.count}
                  </p>
                </div>
                <div className="post__items-count">
                  <img className='post__icon' src={repostImg} alt="" />
                  <p className="count">
                    {post.reposts.count}
                  </p>
                </div>
                <div className="post__items-count">
                  <img className='post__icon' src={viewImg} alt="" />
                  <p className="count">
                    {post.views.count}
                  </p>
                </div>
                <div className="post__items-count">
                  <img className='post__icon' src={dateImg} alt="" />
                  <p className="count">
                    {transformDate(post.date)}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Widget
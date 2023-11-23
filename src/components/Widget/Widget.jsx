import { useEffect, useState, useRef } from 'react'
import './Widget.css'
import { api } from '../../api/api'
import likeImg from '../../img/like.svg'
import dateImg from '../../img/date.svg'
import repostImg from '../../img/repost.svg'
import viewImg from '../../img/view.svg'
import { transformDate } from '../../utils/utils'
import { COUNT, HEIGHT_DIFFERENCE, WIDGET_HEIGHT } from '../../api/constans'

const Widget = () => {
  const widget = useRef(null)

  // Текущие полученные посты
  const [posts, setPosts] = useState([]);
  // Смещение пагинации
  const [offset, setOffset] = useState(0);
  // Всего постов в группе
  const [totalCount, setTotalCount] = useState(0);
  const [isFetching, setIsFetching] = useState(true);

  // ID нужной группы
  useEffect(() => {
    api.getGroupId(101391911);
  }, [])

  useEffect(() => {
    if (isFetching) {
      api.getPosts(offset)
      .then(res => {
        setTotalCount(res.response.count);
        setPosts([...posts, ...res.response.items]);
        setOffset(prev => prev + COUNT * 1);
      })
      .catch(err => console.log(err))
      .finally(() => setIsFetching(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  function handleScroll() {
    if (widget.current.scrollHeight - (widget.current.scrollTop + WIDGET_HEIGHT) < HEIGHT_DIFFERENCE && posts.length < totalCount) {
      setIsFetching(true);
    }
  }

  return (
    <div ref={widget} className='widget widget_size_small' onScroll={handleScroll}>
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
                post.attachments.length && post.attachments[0].photo ? <img src={post.attachments[0].photo.sizes[3].url} alt="" /> : null
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
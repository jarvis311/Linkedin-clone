import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import '../styles/feedPost.css'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const FeedPost = forwardRef(({ name, description, workAt, photoUrl, timestamp },ref) => {

  return (
    <div ref={ref} className='feedPost'>
      <div className="post_infos">
        <Avatar src={photoUrl} />
        <div className="post_info">
          <h2 className='post_name'>{name}</h2>
          <p className='workAt'>{workAt}</p>
          <p className='timestamp'>{timestamp}</p>
        </div>
      </div>
      <div className="image">
        <p className="description">{description}...see more</p>
        {/* <img src="https://media-exp1.licdn.com/dms/image/C5622AQFkNWPCF3q9lw/feedshare-shrink_800/0/1655916001649?e=1658966400&v=beta&t=rMdf9RUJiWxgbM0ZWtc7qjHqS-4-VdxJEgn906Q5rgg" alt="" /> */}
        <img src="" alt="" />
      </div>
      <hr />
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" />
        <InputOption Icon={AddCommentOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Like" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  )
})

export default FeedPost
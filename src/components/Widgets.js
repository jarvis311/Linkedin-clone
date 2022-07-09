import React from 'react'
import '../styles/widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widgets = () => {
    const newArticals = (heading, subtitle) => (
        
        <div className="widgets_article">
            <div className="widgets_article_left">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        
    )



    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
            {newArticals("How Ai can add to GDP", "Top news - 9225 readers")}
        </div>
    )
}

export default Widgets
import React from 'react'
import'./Sidebar.css'
import AvatarImg from '../avatar.jpg'
import SidebarChat from './SidebarChat'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={AvatarImg}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                    
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar

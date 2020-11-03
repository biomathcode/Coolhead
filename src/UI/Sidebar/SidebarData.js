import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [    
        {
        title: 'Productivity',
        path: '/productivity',
        icon: <AiIcons.AiFillSetting />,
        cName:'nav-text'
    },
        {
        title: 'Meditation',
        path: '/meditation',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    },
        {
        title: 'AudioBooks',
        path: '/audiobooks',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    },
        {
        title: 'Podcasts',
        path: '/podcasts',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    }
]
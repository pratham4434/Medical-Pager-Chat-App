import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import 'stream-chat-react/dist/css/index.css';

import './App.css';
const cookies = new Cookies();

const apiKey = 'ny9yyp6pka5e';


const client = StreamChat.getInstance(apiKey);


const App = () => {
    


    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                    
                />
                <ChannelContainer 
                    
                />
            </Chat>
        </div>
    );
}

export default App;

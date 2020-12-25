import React from 'react'
import Directory from '../directory/directory.component';

interface Props {

}

export const Homepage: React.FC<Props> = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
}
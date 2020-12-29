import React from 'react'
import Directory from '../../components/directory/directory.component';

interface Props {

}

const Homepage: React.FC<Props> = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
}

export default Homepage;
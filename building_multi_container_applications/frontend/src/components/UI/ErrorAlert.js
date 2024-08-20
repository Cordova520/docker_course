import React from 'react';

import './ErrorAlert.css';

function ErrorAlert(props){
    return (
        <section className='error-alert'>
            <h2>Something went wrong!</h2>
            <p>{props.error.Text}</p>
        </section>
    );
}

export default ErrorAlert;
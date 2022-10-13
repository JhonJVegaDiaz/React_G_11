import React from 'react';


export async function loginUser(credentials) {
    return fetch('http://localhost:9000/auth/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
import React from 'react'

export default function logout() {
    localStorage.removeItem('token');
    window.location.reload();
    return (
        <div>

        </div>
    )
}

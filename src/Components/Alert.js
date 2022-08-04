import React from 'react'
import './navbar.css';
export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.msg}</strong> 
        
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import './App.css'

function HeadingWithButton({ title, buttonText }) {
    return (
      <div className="heading-container">
        <div className="heading-title">{title}</div>
        <button className="heading-button">{buttonText}</button>
      </div>
    );
}

export default HeadingWithButton
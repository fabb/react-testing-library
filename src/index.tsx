import React from 'react'
import { createRoot } from 'react-dom/client'
import { Form } from './form'
import './index.css'

const App = () => (
    <div>
        <div>1. fix the compile error</div>
        <div>2. fix the failing test</div>
        <Form onSubmit={(formData) => console.log('form was submitted with FormData', Object.fromEntries(formData.entries()))} />
    </div>
)

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

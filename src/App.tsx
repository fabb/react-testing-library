import { Form } from './Form'
import './app.css'

export const App = () => (
    <div>
        <div>1. fix the compile error</div>
        <div>2. fix the failing test</div>
        <Form onSubmit={(formData) => console.log('form was submitted with FormData', Object.fromEntries(formData.entries()))} />
    </div>
)

import { FunctionComponent } from 'react'
import './form.css'

interface FormProps {
    onSubmit: () => void
}

export const Form: FunctionComponent<FormProps> = (props) => {
    return (
        <form
            method="post"
            noValidate={true}
            onSubmit={(e) => {
                e.stopPropagation()
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                props.onSubmit(formData)
            }}
            data-testid="myForm"
        >
            <div>
                <label htmlFor="my-input">Favorite color: </label>
                <input type="text" id="my-input" name="my-input" />
            </div>

            <div>
                <label htmlFor="ok">Please check this checkbox</label>
                <input type="checkbox" name="my-checkbox" aria-label="my-checkbox" id="ok" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

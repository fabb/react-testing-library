import React, { FunctionComponent } from "react";
import "./form.css";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

export const Form: FunctionComponent<FormProps> = (props) => {
  return (
    <form
      method="post"
      noValidate={true}
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        props.onSubmit(formData);
      }}
      data-testid="myForm"
    >
      <div>
        <label htmlFor="my-input">Favorite color: </label>
        <input type="text" id="my-input" name="my-input" />
      </div>

      <div>
        <label htmlFor="my-checkbox">Please check this checkbox</label>
        <input type="checkbox" name="my-checkbox" id="my-checkbox" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

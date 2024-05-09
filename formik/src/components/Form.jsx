

import {useFormik} from 'formik'

function Form()
{
    const formik=useFormik({})
    console.log(formik)
    return(
        <>
           <form>
              <label htmlFor="myName">Name</label>
              <input name="name" id="myName" type="text"/>

              <label htmlFor="myEmail">E-mail</label>
              <input name="email" id="myEmail" type="email"/>

              <label htmlFor="myCh">Channel</label>
              <input name="channel" id="myCh" type="text"/>

              <button>Submit</button>
           </form>
        
        </>
    )
}

export default Form


// Formik will take an object with some value as gievn below----->

// useFormik({ validateOnChange, validateOnBlur, validateOnMount, isInitialValid, enableReinitialize, onSubmit, ...rest }: FormikConfig<FormikValues>)

// useFormik with empty object return this ---->

// {values: undefined, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}
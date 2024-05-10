
import {useFormik} from 'formik'


function Form()
{
    const formik=useFormik({

        initialValues:{
            name:'',
            email:'',
            channel :''
        },
        onSubmit: values=>
            {
                console.log(values)//on submit the form the data or values will be stored by or return by onSubmit which can be extract by call back fun
            }
    })
    console.log(formik.values)// you can access those object passed in the useFormik by writing formik.values
    return(
        <>
           <form onSubmit={formik.handleSubmit}>
              <label htmlFor="myName">Name</label>
              <input name="name" id="myName" type="text" onChange={formik.handleChange} value={formik.values.name}/>

              <label htmlFor="myEmail">E-mail</label>
              <input name="email" id="myEmail" type="email" onChange={formik.handleChange} value={formik.values.email}/>

              <label htmlFor="myCh">Channel</label>
              <input name="channel" id="myCh" type="text"onChange={formik.handleChange} value={formik.values.channel}/>

              <button type="submit">Submit</button>
           </form>
        
        </>
    )
}

export default Form


// Formik will take an object with some value as gievn below----->
// useFormik({ validateOnChange, validateOnBlur, validateOnMount, isInitialValid, enableReinitialize, onSubmit, ...rest }: FormikConfig<FormikValues>)

// useFormik with empty object return this ---->
// {values: undefined, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}

// although we can ahndle the data or manage the data using states but this formik made it easy to handle

// Note--->
// In Formik, the keys used in the initialValues object correspond to the name attribute of your form inputs

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
            },
        validate:values=>
            {
                let error={}
                
                 if(!values.name)
                    {
                        error.name="Name field is required"
                    }
                if(!values.email)
                    {
                        error.email="Email is required"
                    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(values.email)){
                        error.email="Invalid mail"
                    }  
                if(!values.channel)
                    {
                        error.channel="channel is required"
                    }         

                return error
            }
    })
    console.log(formik.values)// you can access those object passed in the useFormik by writing formik.values
    console.log('visited',formik.touched) // it will give you object with name of the input field as key and value as visited or " "
    return(
        <>
           <form onSubmit={formik.handleSubmit}>

               <div className='form-control'>
                 <label htmlFor="myName">Name</label>
                 <input name="name" id="myName" type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                 {formik.touched.name && formik.errors.name?  <div className='error'>{formik.errors.name}</div>:null}
               </div>
   
               <div className='form-control'>
                 <label htmlFor="myEmail">E-mail</label>
                 <input name="email" id="myEmail" type="email" onChange={formik.handleChange} value={formik.values.email}onBlur={formik.handleBlur}/>
                 {formik.touched.email && formik.errors.email?  <div className='error'>{formik.errors.email}</div>:null}
               </div>
               
               <div className='form-control'>
                 <label htmlFor="myCh">Channel</label>
                 <input name="channel" id="myCh" type="text"onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
                 {formik.touched.channel && formik.errors.channel?  <div className='error'>{formik.errors.channel}</div>:null}
               </div>

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


// Note-->

// here we can use "yup" liberary that will simplify the code  for better visibility ...
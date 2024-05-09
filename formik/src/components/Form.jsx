
function Form()
{
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
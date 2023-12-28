const handleRegister = async (e,user, setGoToLogin) => {
    try {
      e.preventDefault();
      console.log(user)
      const info = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (info.status === 201) {
        setTimeout(() => {
          
          setGoToLogin(true);
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

const handleLogin=async(e,user)=>{
    try {
      e.preventDefault()
      await fetch("http://localhost:8080/api/users/login",{
        method:'POST',
        credentials:'include',
        body:JSON.stringify(user),
        headers:{
          "Content-Type": "application/json",
        }
      });
    } catch (error) {
      console.log(error.message)
    }
  }

const CurrentPromise=(setNavigate, setUser, setNotes)=>{
    console.log('promise')
    new Promise(()=>{
        setTimeout(() => {
            fetch('http://localhost:8080/api/users/profile/current',{
                method:'GET',
                credentials:'include',
                headers:{
                    "Content-Type": "application/json",
                }
            }).then((data)=> {
                if(data.status != 200) return setNavigate(true)
                else return data.json()
            }).then((datajson)=>{
                setNotes(datajson.payload.notes)
                return setUser(datajson.payload)
            }).catch((err)=>{
                console.log(err.message)
            })
            
        }, 50);
})};

const Note=async(id,setNote)=>{
    try {
        const info=await fetch(`http://localhost:8080/api/notes/${id}`,{
            method:'GET',
            headers:{
                "Content-Type": "application/json",
            }
        });
        const data= await info.json();
        const note= data.payload;
        return setNote(note)
    } catch (error) {
        console.log(error.message);
    };
};



export {CurrentPromise, handleLogin, handleRegister, Note}
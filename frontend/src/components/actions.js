const url='http://localhost:3000/'
export const login=async (userinfo, setCurrUser, setErrorMsg)=>{
    try {
        const response=await fetch(url+"login", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userinfo)
        })
        const data=await response.json()
        if(!response.ok){ 
            throw data.error
        }
       
        localStorage.setItem('token', response.headers.get('Authorization'))
        setCurrUser(data)
        setErrorMsg(null)
    } catch (error) {
        setErrorMsg(error)
        setCurrUser(null)
    }
}
export const signup=async (userinfo, setCurrUser, setErrorMsg)=>{
    try {
        const response=await fetch(url+"signup", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userinfo)
        })
        
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.setItem('token', response.headers.get('Authorization'))
        setCurrUser(data)
        setErrorMsg(null)
    } catch (error) {
        setErrorMsg(error)
        setCurrUser(null)
    }
}
export const logout=async (user_id, setCurrUser, setErrorMsg)=>{
    try {
        const response=await fetch(url+"logout", {
            method: 'delete',
            headers: {
                'centent-type': 'application/json',
                'authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(user_id)
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.removeItem('token')
        setCurrUser(null)
        setErrorMsg(null)

    } catch (error) {
        setErrorMsg(error)
    }
}
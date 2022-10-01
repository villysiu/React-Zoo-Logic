const url='http://localhost:3000'
export const login=async (userinfo, setCurrUser, setErrorMsg, setCurrUserLevel)=>{
    try {
        const response=await fetch(url+"/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userinfo)
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok){ 
            throw data.error
        }
        localStorage.setItem('token', response.headers.get('Authorization'))
        localStorage.setItem('tokenExpiredAt', Date.now()+30*60*1000)
        setCurrUser(data)
        setErrorMsg(null)
        setCurrUserLevel(data.level)
    } catch (error) {
        setErrorMsg(error)
        setCurrUser(null)
        setCurrUserLevel(0)
    }
}
export const signup=async (userinfo, setCurrUser, setErrorMsg, setCurrUserLevel)=>{
    try {
        const response=await fetch(url+"/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userinfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.setItem('token', response.headers.get('Authorization'))
        localStorage.setItem('tokenExpiredAt', Date.now()+30*60*1000)
        setCurrUser(data)
        setErrorMsg(null)
        setCurrUserLevel(0)
    } catch (error) {
        setErrorMsg(error)
        setCurrUser(null)
        setCurrUserLevel(0)
    }
}
export const logout=async (user_id, setCurrUser, setCurrUserLevel)=>{
    try {
        const response=await fetch(url+"/logout", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(user_id)
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiredAt')
        setCurrUser(null)
        setCurrUserLevel(0)

    } catch (error) {
        console.log(error)
    }
}
export const getCurrUser=async(setCurrUser, setCurrUserLevel,setLoading)=>{
    setLoading(true)
    try {
        const response=await fetch(url+"/private/get_current_user",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            }
        })
        const data=await response.json()
        if(!response.ok){
             throw data.error
        }
        setCurrUser(data)
        setCurrUserLevel(data.level)
        
    } catch (error) {
        setCurrUser(null)
        setCurrUserLevel(0)
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiredAt')
        
    } finally {
        setLoading(false)
    }
}
export const getAllScore=async(setScores)=>{
    try {
        const response=await fetch(url+"/users")
        const data=await response.json()
        if(!response.ok) throw data.error
        setScores(data)
    } catch (error) {
        console.log(error)
    }
}
export const updateScore=async (userId, level, setCurrUserLevel)=>{
    try{
        const response=await fetch(`${url}/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                level: level
            })
        })
        const data = await response.json();
        if(!response.ok)
            throw data.error()
            setCurrUserLevel(level)
    } catch (error){
        console.log(error)
    }
}
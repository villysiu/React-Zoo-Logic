const url='http://localhost:3000/'
export const login=async (userinfo, setCurrUser, setErrorMsg)=>{
    try {
        const response=await fetch(url+"login", {
            method: 'POST',
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
        localStorage.setItem('tokenExpiredAt', Date.now()+30*60*1000)
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
    } catch (error) {
        setErrorMsg(error)
        setCurrUser(null)
    }
}
export const logout=async (user_id, setCurrUser)=>{
    try {
        const response=await fetch(url+"logout", {
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

    } catch (error) {
        console.log(error)
    }
}
export const getCurrUser=async(setCurrUser, setLoading)=>{
    setLoading(true)
    try {
        const response=await fetch(url+"private/get_current_user",{
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

    } catch (error) {
        setCurrUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiredAt')
        
    } finally {
        setLoading(false)
    }
}
export const getAllScore=async(setScores)=>{
    try {
        const response=await fetch(url+"users")
        const data=await response.json()
        if(!response.ok) throw data.error
        setScores(data)
    } catch (error) {
        console.log(error)
    }
}
export const updateScore=async (userId, level)=>{
    try{
        const response=await fetch(`${url}users/${userId}`, {
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
    } catch (error){
        console.log(error)
    }
}
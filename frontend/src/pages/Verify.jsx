import api from '@/config/api'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const Verify = () => {
    const {token} = useParams()
    const [status, setStatus] = useState("Verifying...")
    const navigate = useNavigate()

    useEffect(()=>{
        const verifyEmail = async()=>{
            try {
                const res = await api.post('/user/verify', {}, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                if(res.data.success){
                    setStatus("✅ Email Verified Successfully")
                    toast.success(res.data.message)
                    setTimeout(()=>{
                        navigate('/login')
                    }, 2000)
                }else{
                    setStatus("❌ Invalid or Expired Token")
                }
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Verification Failed. Please try again"
                setStatus(`❌ ${errorMessage}`)
                toast.error(errorMessage)
            }
        };

        verifyEmail()
    },[token, navigate])
  return (
    <div className='relative w-full h-[760px] bg-green-100 overflow-hidden'>
       <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-white p-6 rounded-xl shadow-md text-center w-[90%] max-w-md'>
            <h2 className='text-xl font-semibold text-gray-800'>{status}</h2>
        </div>
       </div>
    </div>
  )
}

export default Verify

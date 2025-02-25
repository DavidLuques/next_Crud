"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function NewPage({ params }) {
  const router = useRouter()
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  useEffect(() => {

    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          settitle(data.title)
          setdescription(data.description)
        })
    }
    console.log("estoy en new ")
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    if (params.id) {
      const res = await fetch(`/api/tasks/` + params.id, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          'content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)
    }
    else {

      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'content-Type': 'application/json'
        }
      })
      const data = await res.json()
    }
    router.refresh()
    router.push('/')
  }


  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-400 p-10 lg:w-1/4 md:w-1/2' onSubmit={submit}>
        <label htmlFor='title' className='font-bold text-sm'>Titulo de la tarea</label>
        <input type='text' id='title' className='border border-gray-800 p-2 m-4 w-full text-black' placeholder='describe el title'
          onChange={(e) => { settitle(e.target.value) }} value={title} />
        <label htmlFor='description' className='font-bold text-sm'>Descripcion de la tarea</label>
        <textarea rows="3" id='description' className='border border-gray-400 p-2 m-4 w-full text-black' placeholder='describe tu tarea '
          onChange={(e) => { setdescription(e.target.value) }} value={description}></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit"> crear</button>
        {params.id&& (
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" type="button" onClick={async ()=>{
            await fetch(`/api/tasks/${params.id}`,{
              method:"DELETE", 
            })
            await router.refresh()
            await router.push('/')
          }}>Delete</button>
        ) 
        }
      </form></ div>
  )
}

export default NewPage
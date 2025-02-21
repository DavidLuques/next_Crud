import {prisma} from '@/libs/prisma'

async function loadTasks(){
//haciendo peticion  
// const response = await fetch('http://localhost:3000/api/tasks')
// const data = await response.json()
// console.log(data)
// obteniendo de la base de datos
const data = await prisma.task.findMany()
return data
}


async function HomePage
  () {
   const tasks= await loadTasks()
  return (
   <section className='container flex justify-center'>
    <div className='grid grid-cols-3 gap-3'>
       {tasks.map(task => ((<div key={task.id} className='bg-slate-500 p-3 hover:bg-slate-700 hover:cursor-pointer'>
        <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.createdAt.toLocaleDateString() }</p>
       </div>))
        
       )}

    </div>
    </section>
  )
}

export default HomePage

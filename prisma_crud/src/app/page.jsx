import TaskCard from '@/components/TaskCard'
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
       {tasks.map(task => ((<TaskCard task={task} key={task.id}/>))
        
       )}

    </div>
    </section>
  )
}

export default HomePage

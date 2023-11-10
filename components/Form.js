import connectDB from "@/lib/connectDB"
import Operacija from "@/models/Operacija"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const Form = () => {
    const addFormData = async (formData) => {
        'use server'
        await connectDB()
        
        const title = formData.get('title')
        const description = formData.get('description')
        const data = new Operacija({
            title,
            description
        })
        await data.save()

        revalidatePath("/")
        redirect('/')
    }

  return (
    <div>
        <form className="flex gap-3 flex-col" action={addFormData}>
            <input className="p-1 border border-cyan-400" type="text" name="title" placeholder="Title" required />
            <input className=" p-1 border border-cyan-400" type="text" name="description" placeholder="Description" required />
            <button className="border border-red-600 rounded-md">Roll</button>
        </form>
    </div>
  )
}

export default Form
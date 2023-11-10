import Form from "@/components/Form"
import connectDB from "@/lib/connectDB"

const New = async () => {
   await connectDB()
  return (
    <div className="max-w-7xl m-auto">
        <h1 className="mb-3">Create New</h1>
        <Form />
    </div>
  )
}

export default New
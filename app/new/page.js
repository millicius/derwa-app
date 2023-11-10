import connectDB from "@/lib/connectDB"

const New = async () => {
   await connectDB()
  return (
    <div>Create New</div>
  )
}

export default New
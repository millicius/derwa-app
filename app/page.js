import connectDB from "@/lib/connectDB"
import Operacija from "@/models/Operacija"

export default async function Home() {
  await connectDB()
  const data = await Operacija.find()
  //console.log(data)
  return (
    <div>
      <h1>Home Page</h1>
      {data.map((d, index) => (
        <div key={index}>{d.title} - {d.description}</div>
      ))}
    </div>
  )
}

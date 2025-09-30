import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant={"destructive"} className="cursor-pointer">
        Click me
      </Button>
    </div>
  )
}

export default Home
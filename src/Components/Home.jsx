
import NewsBoard from "./NewsBoard"


const Home = () => {

  return (
    <div className="home">
        <h2 className="text-center">Latest <span className="badge bg-danger my-3">News</span></h2>
        <NewsBoard/>
    </div>
  )
}

export default Home
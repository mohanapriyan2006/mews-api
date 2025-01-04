import { useContext } from "react"
import NewsBoard from "./NewsBoard"
import ContextData from "../context/ContextData"


const Category = () => {

    const {category} = useContext(ContextData);

  return (
    <div className="category">
        <h2 className="badge bg-primary">{category}</h2>
        <NewsBoard category={category}/>
    </div>
  )
}

export default Category
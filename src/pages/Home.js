//import the supabase from the supabase config file
import supabase from "../config/supabaseClient"
import { useEffect, useState } from 'react'

//components
import ItemCard from "../components/ItemsCar"

const Home = () => {
  const [fetcherror, setfetcherror] = useState(null)
  const [Items, setItems] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from('Items')
        .select()

          if (error) {
            setfetcherror('Could not fetch items')
            setItems(null)
            console.log(error)
          }
          if (data) {
            setItems(data)
            setfetcherror(null)
          }
    }

    fetchItems()
}, [])
  //logs the supabase object to the session
  console.log(supabase)
  return (
    <div className="page home">
      <h2>Home</h2>
      {fetcherror && (<p>{fetcherror}</p>)}
      {Items && (
        <div className="Items">
          {/*order by */}
          <div className="item-grid">
          {Items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
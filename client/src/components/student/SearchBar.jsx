import React,{ useState }from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
const navigate = useNavigate()
const [input,setInput] = useState(data ? data : '')
const onSearchHandler=(e)=>{
  e.preventDefault()
  navigate('/course-list/' + input)
}

  return (
    <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-gray-100 border
     border-gray-300 rounded-lg px-4 shadow-sm'>
      <img src={assets.search_icon} alt="search_icon" className='w-5 h-5 text-gray-500' />
      <input onChange={e=> setInput(e.target.value)} value={input}
        type="text" 
        placeholder='Search for courses' 
        className='w-full h-full outline-none bg-transparent text-gray-600 px-3'
      />
      <button 
        type='submit' 
        className='bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white 
        md:px-6 px-4 md:py-2 py-1'
      >Search</button>
    </form>
  )
}

export default SearchBar

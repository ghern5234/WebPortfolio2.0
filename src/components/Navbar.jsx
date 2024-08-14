import { Links, NAVBAR_REM_HEIGHT } from "../utils/globals.jsx"
const Navbar = () => {
  const path = window.location.pathname
  console.log(path)
  return (
    <ul className={`font-bold text-cyan w-screen bg-black flex flex-row items-center justify-center`} style={{
      height: `${NAVBAR_REM_HEIGHT}rem`
    }}>
      {path!=="/"&&<li className="p-5 hover:bg-teal rounded-xl hover:text-white transition mr-auto text-2xl"><a href={"/"}>Home</a></li>}
      {Links.map((item, index)=> {
      const {link, name} = item
      
      return (
        <li className="p-5 hover:bg-teal rounded-xl hover:text-white transition mx-2 text-2xl" key={index}><a href={link}>{name}</a></li>

      )
    })} 
     {path!=="/"&&<li className="p-4 rounded-xl  transition ml-auto text-transparent">Home</li>}
    </ul>
  )
}

export default Navbar
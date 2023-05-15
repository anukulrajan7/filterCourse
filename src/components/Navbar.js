export default function Navbar(props){
    return(
        <nav className="bg-bgDark2 text-white text-[35px] text-center capitalize font-extrabold py-2 ">
            <div className="logo">
                {props.title}
            </div>
        </nav>
    )
}
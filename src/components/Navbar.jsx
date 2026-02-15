import Links from "./Links";

// const Navbar = ({links, title}){
const Navbar = (props) =>{

    return(
        <>
            <section>
               <h1 className="text-2xl font-bold">Navbar</h1>
            </section>
            <h4>{props.title}</h4>
            <Links links={props.links} />
        </>
    )
}

export default Navbar
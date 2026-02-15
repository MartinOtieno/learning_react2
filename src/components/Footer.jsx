export default function Footer({fruits, year, name}){
    return(
        <section>
            FOOTER {name} {year} 

            <div>
                {
                    fruits.map((x)=>{
                       return <div>
                         {x}
                       </div>
                    })
                }
            </div>
        </section>
    )
}

export default function Links({links})
{

    return (
        <div>
            <ul>
                {
                    links.map((link, i)=>{
                        return <div>{link}</div>
                    })
                }
            </ul>
        </div>
    );
}


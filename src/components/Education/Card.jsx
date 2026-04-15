
function Card({title, time, institute, grade, summary, titles, org, year, type}){
    return(
        
            <div className={type === 'aca' ? 'aca-card' : 'cert-card'}>
                {/*Academic Card*/}
                {/*Turnary operator to check the type of card and render aca or cert -> aca*/}
                {type === 'aca' && (
                    <>
                        <div className="aca-card-header">
                            <h3 className="title">{title}</h3>
                            <span className="time">{time}</span>
                        </div>

                        <div className="aca-card-body">
                            <span className="institute">{institute}</span>
                            <span className="grade">{grade}</span>
                        </div>

                        <p className="aca-card-summary">
                            {summary}
                        </p>
                    </>
                )}

                {/*Certification Card*/}
                {/*Turnary operator to check the type of card and render aca or cert -> cert*/}     
                {type === 'cert' &&(
                    <>
                        {titles.map((title, index) =>(
                            <p key ={index} className="cert-titles">{title}</p>
                        ))}

                        <span className="cert-org">{org} • {year}</span>
                    </>
                )}       
            </div>
           
    )
}
export default Card;
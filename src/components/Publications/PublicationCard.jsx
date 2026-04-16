import { useState } from 'react';

function PublicationCard({ publication_img_link, title, date, description, topics, articleLink }) {
    
    const [activeness, setActiveness] = useState('inactive');
        //Function to toggle the active/inactive state of the project card
        //When the project card is clicked, this function is called to toggle the state between 'active' and 'inactive'
        function toggleDetails() {
    
            //Toggle the activeness state between 'active' and 'inactive'
            //If the current state is 'active', set it to 'inactive', otherwise set it to 'active'
            setActiveness(prev => prev === 'active' ? 'inactive' : 'active');      
        }
            
    //return a card with project details and a dropdown for more information
    return(
        <div className={"publication-card " + activeness} onClick={toggleDetails}>
                <img src = {publication_img_link} alt={title}/>
                <h3>{title}</h3>
                <span className="publication-date">{"Published on " + date}</span>
                <p className="description">
                    {description}
                </p>

                {/*DropDown Content*/}
                <div className="publication-details">
                    
                    <p><strong>Included Topics:</strong></p>
                    <ul>
                        {topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>

                    <div className="publication-buttons">
                        <a href={articleLink} target="_blank" rel="noopener noreferrer">Full Article</a>
                    </div>
                </div>

            </div>
    );
}
export default PublicationCard;
import './Publications.css';
import PublicationCard from './PublicationCard';

function Publications() {
    //return the publications section of the portfolio
    return (
            <section className="publications" id="publications">
                {/*Publications Title*/}
                <a href="#publications" className='title-button'><h2 className="title-text" id="publications-title">Publications</h2></a>
                
                <div className="publications-container">

                    {/*Card 1*/}
                    <PublicationCard
                        publication_img_link = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*2FZtRQhxnPMW6i1XKlAphA.png"
                        title = "Importance of Diagrams"
                        date = "2026-03-21"
                        description = "Explored the importance of diagrams as visual tools for representing systems, ideas, and relationships in a clear and structured manner, especially within software engineering."   
                        topics = {[
                            "Basics of diagrams and their purpose",
                            "Types like flowcharts, UML, and ER diagrams",
                            "Improves communication and clarity",
                            "Helps in system design and problem solving",
                            "Makes learning and understanding easier"
                        ]}
                        articleLink = "https://medium.com/@dulanvishwajithgunarathna/importance-of-diagrams-fa45aab59c12"
                    />

                    

                    {/*Card 2*/}
                    <PublicationCard
                        publication_img_link = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XBUDan-NI4uenqWGy6jl8g.png"
                        title = "Building a Library Management System Using Object-Oriented Programming"
                        date = "2026-01-11"
                        description = "Developed a Library Management System to demonstrate core Object-Oriented Programming (OOP) principles by modeling real-world library operations such as managing books, members, and transactions."
                        topics = {[
                            "Class-based design (Book, Member, Librarian)",
                            "Inheritance using a common Person class",
                            "Encapsulation for secure data handling",
                            "Polymorphism for flexible operations",
                            "Abstraction for simplified user interactions"
                        ]}
                        articleLink = "https://medium.com/@dulanvishwajithgunarathna/building-a-library-management-system-using-object-oriented-programming-1f729a02a492"
                    />

                    {/*Card 3*/}
                    <PublicationCard
                        publication_img_link = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XIZAZfUPCUy2Lmytjia-kg.jpeg"
                        title = "Enhancing Malware Prediction : An Undergraduate Research Breakthrough"
                        date = "2025-10-15"
                        description = "Presented a research-based project analyzing an enhanced MalSEIRS model to improve the accuracy of malware propagation prediction in dynamic network environments, showcased at the Undergraduate Research Symposium and Innovation Exhibition 2025."
                        topics = {[
                            "Improved malware prediction",
                            "Real-world network simulation",
                            "Faster and more accurate analysis",
                            "Graph-based visualization",
                            "Supports early threat detection"
                        ]}
                        articleLink = "https://medium.com/@dulanvishwajithgunarathna/enhancing-malware-prediction-an-undergraduate-research-breakthrough-e06c43cbbaac"
                    />                            
                
                </div>
            </section>
    )
}
export default Publications;
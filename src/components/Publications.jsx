import '../styles/Publications.css';

function Publications() {

    

    //return the publications section of the portfolio
    return (
            <section className="publications" id="publications">
                {/*Publications Title*/}
                <h2 className="title-text" id="publications-title">Publications</h2>
                
                <div className="publications-container">

                    {/*Card 1*/}
                    <div className="publication-card">
                        <img src = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*2FZtRQhxnPMW6i1XKlAphA.png" alt="Importance of Diagrams"/>
                        <h3>Importance of Diagrams</h3>
                        <span className="publication-date">Published on 2026-03-21</span>
                        <p className="description">
                            Explored the importance of diagrams as visual tools for representing systems, ideas, and relationships in a clear and structured manner, especially within software engineering.
                        </p>

                        {/*DropDown Content*/}
                        <div className="publication-details">
                            <p><strong>Included Topics:</strong></p>
                            <ul>
                                <li>Basics of diagrams and their purpose</li>
                                <li>Types like flowcharts, UML, and ER diagrams</li>
                                <li>Improves communication and clarity</li>
                                <li>Helps in system design and problem solving</li>
                                <li>Makes learning and understanding easier</li>
                            </ul>

                            <div className="publication-buttons">
                                <a href="https://medium.com/@dulanvishwajithgunarathna/importance-of-diagrams-fa45aab59c12" target="_blank">Full Article</a>
                            </div>
                        </div>
                    </div>
                    

                    {/*Card 2*/}
                    <div className="publication-card">
                        <img src = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XBUDan-NI4uenqWGy6jl8g.png" alt="Building a Library Management System"/>
                        <h3>Building a Library Management System Using Object-Oriented Programming</h3>
                        <span className="publication-date">Published on 2026-01-11</span>
                        <p className="description">
                            Developed a Library Management System to demonstrate core Object-Oriented Programming (OOP) principles by modeling real-world library operations such as managing books, members, and transactions.
                        </p>

                        {/*DropDown Content*/}
                        <div className="publication-details">
                            <p><strong>Included Topics:</strong></p>
                            <ul>
                                <li>Class-based design (Book, Member, Librarian)</li>
                                <li>Inheritance using a common Person class</li>
                                <li>Encapsulation for secure data handling</li>
                                <li>Polymorphism for flexible operations</li>
                                <li>Abstraction for simplified user interactions</li>
                            </ul>

                            <div className="publication-buttons">
                                <a href="https://medium.com/@dulanvishwajithgunarathna/building-a-library-management-system-using-object-oriented-programming-1f729a02a492" target="_blank">Full Article</a>
                            </div>
                        </div>
                    </div>

                    {/*Card 3*/}
                    <div className="publication-card">
                        <img src = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XIZAZfUPCUy2Lmytjia-kg.jpeg" alt="Enhancing Malware Prediction"/>
                        <h3>Enhancing Malware Prediction : An Undergraduate Research Breakthrough</h3>
                        <span className="publication-date">Published on 2025-10-15</span>
                        <p className="description">
                            Presented a research-based project analyzing an enhanced MalSEIRS model to improve the accuracy of malware propagation prediction in dynamic network environments, showcased at the Undergraduate Research Symposium and Innovation Exhibition 2025.
                        </p>

                        {/*DropDown Content*/}
                        <div className="publication-details">
                            <p><strong>Included Topics:</strong></p>
                            <ul>
                                <li>Improved malware prediction</li>
                                <li>Real-world network simulation</li>
                                <li>Faster and more accurate analysis</li>
                                <li>Graph-based visualization</li>
                                <li>Supports early threat detection</li>
                            </ul>

                            <div className ="publication-buttons">
                                <a href="https://medium.com/@dulanvishwajithgunarathna/enhancing-malware-prediction-an-undergraduate-research-breakthrough-e06c43cbbaac" target="_blank">Full Article</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
    )
}
export default Publications;
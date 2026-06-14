function DonwloadCard({ title, description, link }) {
    return(
        <div className="download-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" className="download-btn"><i className="fas fa-download"></i> Click Me</a>
        </div>
    );
}
export default DonwloadCard
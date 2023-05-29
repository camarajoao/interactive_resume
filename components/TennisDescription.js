import Image from "next/image";

import joaoMurray1 from '../public/images/joao_murray_1.jpg';
import joaoMurray2 from '../public/images/joao_murray_2.jpg';

function TennisDescription({ sidebarTennis }) {
    return (
        <div className={sidebarTennis ? 'sidebar__tennis active' : 'sidebar__tennis'}>
            <h1 className="sidebar__tennis__header">Tennis Career</h1>
            <p>My tennis career has been an incredible journey that has taken me across the globe, allowing me to immerse myself in different cultures and experience the beauty of diversity. As a professional tennis player, I had the privilege of representing my country on international stages, competing against top-ranked athletes, and showcasing my skills to the world. The exhilaration of stepping onto different courts in countless countries, from prestigious tournaments to smaller circuits, provided me with invaluable experiences that shaped my character both on and off the court.</p>
            <p>Transitioning from the professional circuit to the collegiate realm, I seized the opportunity to continue my tennis journey while pursuing higher education at Murray State University. As a student-athlete, I balanced the rigorous demands of training and competition with academic excellence. Competing in the NCAA, I had the privilege of representing Murray State University and being part of a team that shared a collective drive for success. The camaraderie with my teammates, the unwavering support from coaches, and the competitive spirit within the NCAA fueled my determination to excel. Through this phase of my career, I not only earned a well-rounded education but also developed invaluable skills such as teamwork, discipline, and time management that will continue to serve me in all aspects of life.</p>
            <div className="sidebar__tennis__image">
                <Image src={joaoMurray2} className="sidebar__tennis__image__image" fill/>
            </div>
            
        </div>
    )
}

export default TennisDescription
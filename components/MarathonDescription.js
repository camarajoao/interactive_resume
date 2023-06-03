import Image from 'next/image';
import run from '../public/images/IMG_7790.jpg';
import run2 from '../public/images/run2.jpg'

function MarathonDescription({ sidebarMarathon }) {
    return (
        <div className={sidebarMarathon ? 'sidebar__left active' : 'sidebar__left'}>
            <h1 className="sidebar__left__header">Marathon Runner</h1>
            <p>After a period away from sports, I found myself yearning for a change in my life. I stumbled upon running almost by chance, and little did I know that it would become my ultimate passion. The first few steps were arduous, my breaths labored, and my legs felt heavy. But as time went on, something magical happened. Each stride became an opportunity for self-discovery and personal growth. Running allowed me to reconnect with my body and embrace a sense of freedom I had long forgotten. Now, I proudly call myself a runner, eagerly taking on new challenges and running marathons and half-marathons. It's not just a physical pursuit; it's a journey of self-transformation and a testament to the incredible potential that lies within us all.</p>
            <div className="sidebar__left__image">
                <Image src={run} className="sidebar__left__image__image" fill />
            </div>
        </div>
    )
}

export default MarathonDescription
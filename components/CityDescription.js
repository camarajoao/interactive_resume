import Image from 'next/image';
import vancouver1 from '../public/images/vancouver1.jpg';

function CityDescription({ sidebarCity }) {
  return (
      <div className={sidebarCity ? 'sidebar__left active' : 'sidebar__left'}>
          <h1 className="sidebar__left__header">Vancouver, BC</h1>
          <p>Vancouver, British Columbia, is a vibrant and picturesque city nestled between the Pacific Ocean and the majestic Coastal Mountains. As a proud resident of Vancouver, I can attest to the numerous benefits of living in this stunning metropolis. The city offers a perfect blend of natural beauty and urban sophistication, with its breathtaking beaches, lush parks, and thriving cultural scene. Vancouver is renowned for its mild climate, making it an ideal destination for outdoor enthusiasts who can enjoy activities like hiking, skiing, and kayaking all year round. Moreover, the city's diverse population contributes to a rich tapestry of cultures, languages, and cuisines, creating a welcoming and inclusive community. With a strong economy, excellent healthcare, and a high standard of living, Vancouver truly offers a remarkable quality of life that I feel fortunate to experience every day.</p>
          <div className="sidebar__left__image">
              <Image src={vancouver1} className="sidebar__left__image__image" fill/>
          </div>
      </div>
  )
}

export default CityDescription
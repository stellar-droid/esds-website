import gsap from 'gsap';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function MobileNavbar() {
    const demoState = useSelector(state => state.DemoState);
    const [openSublists, setOpenSublists] = useState({});

    const toggleSublist = (category) => {
        setOpenSublists(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    useEffect(() => {
        Object.keys(openSublists).forEach(category => {
            if (openSublists[category]) {
                gsap.to(`.sublist-${category.replace(/\s+/g, '-')}`, { height: 'auto', opacity: 1, duration: 0.6, ease: 'power2.out' });
            } else {
                gsap.to(`.sublist-${category.replace(/\s+/g, '-')}`, { height: 0, opacity: 0, duration: 0.6, ease: 'power2.in' });
            }
        });
    }, [openSublists]);

    const menuItems = [
        {
            title: 'Cloud Services',
            path: '#',
            sublist: [
                { name: 'Cloud Services', path: '/cloud-services' },
                { name: 'Private Cloud', path: '/private-cloud-services' },
                { name: 'Enterprise Cloud', path: '/enterprise-cloud-services' },
                { name: 'BFSI Community Cloud', path: '/bfsi-cloud-services' },
                { name: 'Government Community Cloud', path: '/government-cloud-services' },
            ]
        },
        { title: 'Managed Services',
          path: '/managed-services',
          sublist: [
            { name: 'Low Code No Code', path: 'https://lowcodemagic.co.in', external: true },
            { name: 'Project Management Solution', path: 'https://digitalipas.com',external: true },
            { name: 'Agritech Services', path: 'https://www.famrut.com', external: true },
            { name: 'eNlight 360', path: 'https://insight360.cloud', external: true },
        ] },
        { title: 'Managed Security Services', path: '/soc-as-a-service' },
        { title: 'Colocation', path: '/colocation-data-centre-services' },
        { title: 'PaaS', path: '/platform-as-a-service' },
        { title: 'SaaS', path: '/software-as-a-service' },
        { title: 'Careers', path: 'https://esds.co.in/esds-peoples/careers/', external: true },
        { title: 'Why ESDS', path: '/why-esds' },
        { title: 'About ESDS', path: '/about-esds' },
        { title: 'News & Events', path: 'https://esds.co.in/esds-peoples/news-events/', external: true },
        { title: 'White Paper', path: '/whitepapers' },
        { title: 'Investor Report', path: '/investors' },
        { title: 'Compliances & Certificates', path: '/certificate' },
        { title: 'Leadership', path: '/Leadership' },
        { title: 'Contact Us', path: '/contact-us' }
    ];

    return (
        <div className={`mobile-navbar ${demoState.navbar ? 'expand-navbar' : ''}`}>
            <div className="navbar-item">
                <ul className='unorder-list'>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.sublist ? (
                                <div className='cloud-service-link' onClick={() => toggleSublist(item.title)}>
                                    <div className={`title-sublist ${openSublists[item.title] ? 'active-list' : ''}`}>
                                        <li>{item.title}</li>
                                        <IoIosArrowDown />
                                    </div>
                                    <div className={`sublist sublist-${item.title.replace(/\s+/g, '-')}`} style={{ overflow: 'hidden', height: 0, opacity: 0 }}>
                                        <ul>
                                            {item.sublist.map((subItem, subIndex) => (
                                                <Link key={subIndex} to={subItem.path} target={subItem.external ? '_blank' : '_self'}>
                                                    <li className='sublist-active'>{subItem.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link to={item.path} target={item.external ? '_blank' : '_self'}>
                                    <li>{item.title}</li>
                                </Link>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

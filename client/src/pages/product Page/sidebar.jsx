import './sidebardesign.css';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        section: ''
    },
    {
        display: 'Getting',
        icon: <i className='bx bx-star'></i>,
        section: 'started'
    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        section: 'calendar'
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        section: 'user'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'></i>,
        section: 'order'
    },
]

const Sidebar = () => {
    return <div className='sidebar'>
        <div className="sidebarTitle">
            choose category
        </div>
        <div className="sidebarMenu">
            {
                sidebarNavItems.map((item, index) => (
                        <div className="sidebarMenuItem" key={index}>
                            <div className="sidebarText">
                                {item.display}
                            </div>
                        </div>
                ))
            }

            <div className='searchMinMax'>
                <div className='searchMin'>
                    <span>min</span>
                    <input className='minMaxInput' type="text" />
                </div>
                <div className='searchMax'>
                    <span>max</span>
                    <input className='minMaxInput' type="text" />
                </div>
            </div>
            <button className='minMaxSearch'>search</button>
        </div>
    </div>;
};

export default Sidebar;
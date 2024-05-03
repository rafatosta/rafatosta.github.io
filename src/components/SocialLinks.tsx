import { Icon } from '@iconify/react';
import { socialMedia } from "../data";

function SocialLinks() {
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            {socialMedia.map((s) => (
                <a href={s.link}
                    target='_blank'
                    className=''>
                    <Icon
                        icon={`mdi:${s.iconName}`}
                        style={{ fontSize: '36px', color: '#48A1A0' }}
                    />
                </a>
            ))}
        </div>);
}

export default SocialLinks;
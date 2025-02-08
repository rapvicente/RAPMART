import React from 'react';

const VideoComponent: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FFF2F2', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                width="600"
                height="350"
                src="https://www.youtube.com/embed/_certnpAypo"
                title="Labubu Video"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoComponent;
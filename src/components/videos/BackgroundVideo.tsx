import { useEffect, useRef, useState } from 'react';

// Define types for window.jQuery and mb_YTPlayer plugin
declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        jQuery?: any;
    }
}

interface VideoProps {
    starts?: number;
    videoId?: string;
}

const BackgroundVideo: React.FC<VideoProps> = ({ starts, videoId }) => {
    const playerRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        if (typeof window !== 'undefined') {
            // Load external script function with TypeScript annotations
            const loadScript = (src: string, onLoad: () => void) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = onLoad;
                document.body.appendChild(script);
            };

            // Load jQuery, then YTPlayer plugin
            loadScript('https://code.jquery.com/jquery-3.6.0.min.js', () => {
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js', () => {
                    if (window.jQuery && playerRef.current) {
                        const $player = window.jQuery(playerRef.current);

                        // Initialize the player and listen for the 'YTPReady' event
                        $player.mb_YTPlayer();

                        $player.on('YTPReady', () => {
                            console.log('Player is ready!');
                        });
                    }
                });
            });
        }

        // Cleanup dynamically added scripts
        return () => {
            const jQueryScript = document.querySelector('script[src="https://code.jquery.com/jquery-3.6.0.min.js"]');
            const ytPlayerScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js"]');
            if (jQueryScript) document.body.removeChild(jQueryScript);
            if (ytPlayerScript) document.body.removeChild(ytPlayerScript);
        };
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <div className="player"
                ref={playerRef}
                data-property={`{
                    videoURL:"${videoId}",
                    containment:'.video-bg-live',
                    showControls:false,
                    autoPlay:true,
                    zoom:0,
                    loop:true,
                    mute:true,
                    startAt:${starts},
                    opacity:1,
                    quality:'default'
                    }`}
            />
        </>
    );
};

export default BackgroundVideo;

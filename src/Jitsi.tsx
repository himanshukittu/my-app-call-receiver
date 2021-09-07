import { useEffect } from "react";

const Jitsi = (): any => {

    useEffect((): any => {
        try {
            const options = {
                roomName: 'IHX Connect',
                width: '100%',
                height: '800px',
                parentNode: document.querySelector('#meet'),
                userInfo: {
                    email: 'email@jitsiexamplemail.com',
                    displayName: 'John Doe'
                },
                configOverwrite: {
                    prejoinPageEnabled: true,
                    startAudioMuted: 4,
                    startVideoMuted: 4,
                    startWithVideoMuted: true,
                    startWithAudioMuted: true,
                    enableNoAudioDetection: true,
                    enableNoisyMicDetection: true,
                    enableInsecureRoomNameWarning: true,
                    disableSimulcast: false,
                    disableLocalVideoFlip: true,
                    doNotStoreRoom: true,
                    disableDeepLinking: true
                },
                interfaceConfigOverwrite: {
                    'TOOLBAR_BUTTONS': [
                        'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                        'fodeviceselection', 'hangup', 'profile', 'recording','chat',
                         /* 'livestreaming'*/, 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                        'videoquality', 'filmstrip', 'invite', 'feedback', /*'stats', 'shortcuts',*/
                        'tileview', 'videobackgroundblur', 'download', 'help','security'
                    ],
                    INVITATION_POWERED_BY: true,
                    SHOW_CHROME_EXTENSION_BANNER: false,
                    filmStripOnly: false,
                    DEFAULT_REMOTE_DISPLAY_NAME: 'IHX User',
                    // DEFAULT_LOGO_URL: window.location.origin + '/ihx-logo.png',
                    // DEFAULT_WELCOME_PAGE_LOGO_URL: window.location.origin + '/ihx-logo.png',
                    SHOW_JITSI_WATERMARK: false,
                }
            };
            new (window as any).JitsiMeetExternalAPI('meet.jit.si', options);
        }
        catch (e) {

        }
    }, [])
    return (
        <div id="meet"></div>
    )
}

export default Jitsi;
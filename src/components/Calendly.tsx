import { onMount } from 'solid-js';

function CalendlyWidget() {
    const calendlyUrl = 'https://calendly.com/lucas-sproule-42/30min';

    const loadScript = (src:string) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Script load error: ${src}`));
            document.body.appendChild(script);
        });
    };

    onMount(async () => {
        try {
            await loadScript('https://assets.calendly.com/assets/external/widget.js');
        } catch (error) {
            console.error('Failed to load Calendly script', error);
        }
    });

    return (
        <div>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <a href="#" onclick={() => { Calendly.initPopupWidget({ url: calendlyUrl }); return false; }}>
                Schedule some time on my calendar!
            </a>
        </div>
    );
}

export default CalendlyWidget;


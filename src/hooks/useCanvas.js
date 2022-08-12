import { useRef, useEffect } from 'react';

const useCanvas = draw =>  { 
    const canvasRef = useRef(null);

    useEffect(() => { 
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }, [draw])

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            if(canvas.width != rect.width) canvas.width = rect.width;
            if(canvas.height != rect.height) canvas.height = rect.height;

            const context = canvas.getContext('2d');
            draw(context);
            
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
        
    }, [draw])

    
    return canvasRef;
}

export default useCanvas;
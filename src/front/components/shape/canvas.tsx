import React, { useEffect, useRef } from 'react';
import { useMobile } from '../contexts/mobileContext.tsx';

function Canvas({life}) {
    const { isMobile } = useMobile();

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ct = canvas.getContext('2d');

        canvas.width = isMobile ? window.innerWidth * 0.6 : window.innerWidth * 0.3;
        canvas.height = canvas.width * 0.75;
        const gap = isMobile ? window.innerHeight * 0.02 : window.innerWidth * 0.02;

        const drawBackground = (ct) => {
            ct.fillStyle = 'rgba(203, 253, 170, 0.8)';
            ct.fillRect(0, 0, canvas.width, canvas.height);
        }

        const drawBase = (ct) => {
            ct.beginPath();
            ct.moveTo(gap, canvas.height - gap);
            ct.strokeStyle = 'black';
            ct.lineTo(canvas.width - gap, canvas.height - gap);
            ct.stroke();
        }

        const drawMat = (ct) => {
            ct.moveTo(2 * gap, canvas.height - gap);
            ct.lineTo(2 * gap, gap);
            ct.stroke();
        }
        
        const drawTop = (ct) => {
            ct.moveTo(gap, gap);
            ct.lineTo(canvas.width - gap, gap);
            ct.stroke();
        }

        const drawAngle = (ct) => {
            ct.moveTo(2 * gap, 100);
            ct.lineTo(100, gap);
            ct.stroke();
        }

        const drawTie = (ct) => {
            ct.moveTo(canvas.width - 4 * gap, gap);
            ct.lineTo(canvas.width - 4 * gap, 3 * gap);
            ct.stroke();
        }

        const drawHead = (ct) => {
            ct.moveTo(canvas.width - 4 * gap, 3 * gap);
            ct.arc(canvas.width - 4 * gap, 3 * gap, 0.7 * gap, 0, 2 * Math.PI);
            ct.fillStyle = 'black';
            ct.fill();
        }

        const drawArms = (ct) => {
            ct.moveTo(canvas.width - 4 * gap, (3 + 0.5) * gap);
            ct.lineTo(canvas.width - 4 * gap, 5 * gap);
            ct.moveTo(canvas.width - 4 * gap, 4 * gap);
            ct.lineTo(canvas.width - 5 * gap, 5 * gap);
            ct.moveTo(canvas.width - 4 * gap, 4 * gap);
            ct.lineTo(canvas.width - 3 * gap, 5 * gap);
            ct.stroke();
        }

        const drawLegs = (ct) => {
            ct.moveTo(canvas.width - 4 * gap, 5 * gap);
            ct.lineTo(canvas.width - 4 * gap, 6 * gap);
            ct.moveTo(canvas.width - 4 * gap, 6 * gap);
            ct.lineTo(canvas.width - 5 * gap, 7 * gap);
            ct.moveTo(canvas.width - 4 * gap, 6 * gap);
            ct.lineTo(canvas.width - 3 * gap, 7 * gap);
            ct.stroke();
        }
        // Start drawing
        if (ct != null) {          
            switch (life) {
                case 7:
                    // Base
                    drawBackground(ct);
                    drawBase(ct);
                    break;

                case 6:
                    // Mat
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    break;

                case 5:
                    // Top
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    break;

                case 4:
                    // Angle
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    drawAngle(ct);
                    break;

                case 3:
                    // Tie
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    drawAngle(ct);
                    drawTie(ct);
                    break;

                case 2:
                    // Head
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    drawAngle(ct);
                    drawTie(ct);
                    drawHead(ct);
                    break;

                case 1:
                    // Arms
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    drawAngle(ct);
                    drawTie(ct);
                    drawHead(ct);
                    drawArms(ct);
                    break;

                case 0:
                    // Legs
                    drawBackground(ct);
                    drawBase(ct);
                    drawMat(ct);
                    drawTop(ct);
                    drawAngle(ct);
                    drawTie(ct);
                    drawHead(ct);
                    drawArms(ct);
                    drawLegs(ct);
                    break;
                default:
                    ct.clearRect(0, 0, canvas.width, canvas.height);
                    drawBackground(ct);
                    break;
            }
        }
    }, [isMobile, life]);

    return (
        <canvas ref={canvasRef} />
    );
}

export default Canvas;
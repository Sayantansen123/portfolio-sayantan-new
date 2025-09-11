import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const canvasRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioCtxRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;

        // Create AudioContext once
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioCtxRef.current.createAnalyser();
            analyserRef.current.fftSize = 64;
        }

        // Create MediaElementSource only once
        if (!sourceRef.current) {
            sourceRef.current = audioCtxRef.current.createMediaElementSource(audioRef.current);
            sourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioCtxRef.current.destination);
        }

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        const canvas = canvasRef.current;
        const canvasCtx = canvas.getContext("2d");

        let animationId;
        const draw = () => {
            animationId = requestAnimationFrame(draw);
            analyserRef.current.getByteFrequencyData(dataArray);

            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            const barWidth = 5;
            let x = 0;

            for (let i = 0; i < dataArray.length; i++) {
                const barHeight = dataArray[i] / 2;
                canvasCtx.fillStyle = "black";
                canvasCtx.fillRect(
                    x,
                    canvas.height - barHeight,
                    barWidth,
                    barHeight
                );
                x += barWidth + 6;
            }
        };

        draw();

        return () => cancelAnimationFrame(animationId);
    }, []);

    const togglePlay = async () => {
        if (!audioRef.current || !audioCtxRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            await audioCtxRef.current.resume(); // required by browsers after click
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="flex flex-row justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[19.2rem] left-[12rem] max-lg:static flex items-center gap-4 max-lg:items-end"
                >
                    <audio ref={audioRef} src="/fallen.mp3" loop />

                    {/* Sound toggle button */}
                    <button
                        onClick={togglePlay}
                        className="p-4 rounded-full text-black hover:scale-110 transition max-lg:pl-0"
                    >
                        {isPlaying ? <Volume2 size={28} /> : <VolumeX size={28} />}
                    </button>

                    {/* Visualizer */}

                </motion.div>


                <canvas
                    ref={canvasRef}
                    width={300}
                    height={150}
                    className={`absolute top-[12.2rem] left-[16rem]  max-lg:static ${isPlaying ? "" : "hidden"} max-md:w-[80vw]`}
                />

            </div>
        </>
    );
}

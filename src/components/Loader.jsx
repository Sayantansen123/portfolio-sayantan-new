import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white gap-8">
            <style>{`
        @keyframes pathCircle {
          25% { stroke-dashoffset: 125; }
          50% { stroke-dashoffset: 175; }
          75% { stroke-dashoffset: 225; }
          100% { stroke-dashoffset: 275; }
        }
        
        @keyframes dotCircle {
          25% { transform: translate(0, 0); }
          50% { transform: translate(18px, -18px); }
          75% { transform: translate(0, -36px); }
          100% { transform: translate(-18px, -18px); }
        }
        
        @keyframes pathTriangle {
          33% { stroke-dashoffset: 74; }
          66% { stroke-dashoffset: 147; }
          100% { stroke-dashoffset: 221; }
        }
        
        @keyframes dotTriangle {
          33% { transform: translate(0, 0); }
          66% { transform: translate(10px, -18px); }
          100% { transform: translate(-10px, -18px); }
        }
        
        @keyframes pathRect {
          25% { stroke-dashoffset: 64; }
          50% { stroke-dashoffset: 128; }
          75% { stroke-dashoffset: 192; }
          100% { stroke-dashoffset: 256; }
        }
        
        @keyframes dotRect {
          25% { transform: translate(0, 0); }
          50% { transform: translate(18px, -18px); }
          75% { transform: translate(0, -36px); }
          100% { transform: translate(-18px, -18px); }
        }
        
        .loader-circle circle {
          fill: none;
          stroke: #2F3545;
          stroke-width: 10px;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 150 50 150 50;
          stroke-dashoffset: 75;
          animation: pathCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .loader-circle::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: #5628EE;
          top: 37px;
          left: 19px;
          transform: translate(-18px, -18px);
          animation: dotCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .loader-triangle polygon {
          fill: none;
          stroke: #2F3545;
          stroke-width: 10px;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 145 76 145 76;
          stroke-dashoffset: 0;
          animation: pathTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .loader-triangle::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: #5628EE;
          top: 37px;
          left: 21px;
          transform: translate(-10px, -18px);
          animation: dotTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .loader-rect rect {
          fill: none;
          stroke: #2F3545;
          stroke-width: 10px;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 192 64 192 64;
          stroke-dashoffset: 0;
          animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        
        .loader-rect::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: #5628EE;
          top: 37px;
          left: 19px;
          transform: translate(-18px, -18px);
          animation: dotRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
      `}</style>

            {/* Circle Loader */}
            <div className="loader-circle relative w-11 h-11">
                <svg viewBox="0 0 80 80" className="block w-full h-full">
                    <circle cx="40" cy="40" r="32"></circle>
                </svg>
            </div>

            {/* Triangle Loader */}
            <div className="loader-triangle relative w-12 h-11">
                <svg viewBox="0 0 86 80" className="block w-full h-full">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>

            {/* Rectangle Loader */}
            <div className="loader-rect relative w-11 h-11">
                <svg viewBox="0 0 80 80" className="block w-full h-full">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </div>
        </div>
    )
}

export default Loader


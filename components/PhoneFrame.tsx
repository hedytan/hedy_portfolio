"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function PhoneFrame({src,video=false,label,poster}:{src:string;video?:boolean;label:string;poster?:string}) {
 const playerRef = useRef<HTMLVideoElement>(null);
 const [treeHeader, setTreeHeader] = useState('#ffffff');
 const treeVideo = video && src.includes('choose-tree');
 useEffect(() => {
  const player = playerRef.current;
  if (!treeVideo || !player) return;
  const canvas = document.createElement('canvas'); canvas.width = 1; canvas.height = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let frame = 0;
  const sample = () => {
   if (ctx && player.readyState >= 2) {
    ctx.drawImage(player, player.videoWidth * .15, player.videoHeight * .015, 1, 1, 0, 0, 1, 1);
    const [r,g,b] = ctx.getImageData(0,0,1,1).data;
    setTreeHeader(`rgb(${r},${g},${b})`);
   }
   frame = player.requestVideoFrameCallback(sample);
  };
  frame = player.requestVideoFrameCallback(sample);
  return () => player.cancelVideoFrameCallback(frame);
 }, [src, treeVideo]);
 const resonanceRecording = video && src.startsWith('/resonance/');
 const recording = src.startsWith('/fitsapp-case/recording/') || resonanceRecording;
 const headerImage = src.includes('weekly-goal.mp4') || src.includes('name-tree.mp4') ? '/fitsapp-case/recording/weekly-goal-clean.jpeg' : src.includes('choose-tree') ? '/fitsapp-case/recording/collection-clean.jpeg' : undefined;
 const cleanHeader = resonanceRecording ? '#08080a' : src.includes('progress-recording') ? '#ffffff' : src.includes('choose-tree') ? '#a88970' : '#aaa5d2';
 return <div className="pc-phone"><div className={`pc-phone-screen${src === '/fitsapp-case/progress.png' ? ' pc-phone-screen--cropped' : src.startsWith('/mind-the-gap/') ? ' pc-phone-screen--prototype' : ''}`}>{video?<video ref={playerRef} key={src} src={src} poster={poster || headerImage} autoPlay muted loop playsInline preload="auto" onCanPlay={event => { const player = event.currentTarget; player.muted = true; void player.play().catch(() => {}); }} aria-label={label}/>:<Image src={src} alt={label} fill sizes="220px"/>}{recording && <span className={`pc-phone-clean-status${treeVideo ? " pc-phone-clean-status--island" : ""}`} style={treeVideo ? {backgroundColor:treeHeader} : headerImage ? {backgroundImage:`url("${headerImage}")`,backgroundSize:"100% auto",backgroundPosition:"center top",backgroundRepeat:"no-repeat"} : {backgroundColor:cleanHeader}} aria-hidden="true"/>}</div><Image className="pc-phone-frame" src="/iphone-17-frame.png" alt="" width={450} height={920} sizes="220px" aria-hidden="true"/></div>;
}

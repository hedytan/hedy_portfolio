import Image from "next/image";
export default function PhoneFrame({src,video=false,label}:{src:string;video?:boolean;label:string}) {
 return <div className="pc-phone"><div className={`pc-phone-screen${src === '/fitsapp-case/progress.png' ? ' pc-phone-screen--cropped' : ''}`}>{video?<video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={label}/>:<Image src={src} alt={label} fill sizes="220px"/>}</div><Image className="pc-phone-frame" src="/iphone-17-frame.png" alt="" width={450} height={920} sizes="220px" aria-hidden="true"/></div>;
}

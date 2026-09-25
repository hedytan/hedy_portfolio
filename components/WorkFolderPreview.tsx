import Image from "next/image";

const previews = [
  { src: "/resonance/draw-mood.png", label: "Draw a mood" },
  { src: "/resonance/feed.png", label: "Resonance" },
  { src: "/resonance/connection.png", label: "Find a connection" },
];

export default function WorkFolderPreview() {
  return <span className="work-folder-preview" aria-hidden="true">
    <span className="work-folder-back" />
    {previews.map((preview, index) => <span className={`work-preview-sheet work-preview-sheet-${index}`} key={preview.src}>
      <Image src={preview.src} alt="" width={180} height={390} sizes="90px" draggable={false} />
      <span>{preview.label}</span>
    </span>)}
    <span className="work-folder-front"><span className="work-folder-label">SELECTED WORK</span><span className="work-folder-mark">↗</span></span>
  </span>;
}

import ProcessCase from "@/components/ProcessCase";
export const metadata={title:"FitsApp — Hedy Tan"};
export default function FitsApp(){return <ProcessCase name="FitsApp" intro="A step tracker that turns everyday walking into a growing tree." facts={[["For","Busy young professionals"],["Type","Activity tracking"],["Focus","Progress & personalisation"]]} next="resonance" chapters={[
{id:"problem",label:"The problem",title:"Everyday movement goes unnoticed.",text:"Young people sit for long stretches, and small bouts of movement go unnoticed.",note:"Research also pointed to fatigue and slow results."},
{id:"solution",label:"The solution",title:"Turn steps into visible growth.",text:"Steps grow a tree, and the step count stays visible.",image:"/fitsapp-case/progress.png"},
{id:"decisions",label:"Key decisions",title:"Progress first. Customisation second.",text:"The tree leads on the progress screen. Choosing a tree gets its own view.",note:"Trade-off: an extra step to change tree; steps miss other activities.",image:"/fitsapp-case/overview.png"},
{id:"prototype",label:"Choose a goal",title:"A clear starting point for the week.",text:"Pick one of three levels to see the weekly step target.",video:"/fitsapp-case/recording/weekly-goal.mp4",note:"Trade-off: presets are easy but less flexible."},
{id:"growth",label:"Make it personal",title:"Give your progress a name.",text:"Name your tree; the name appears on its sign.",video:"/fitsapp-case/recording/name-tree.mp4",note:"Does naming help people return? Untested."},
{id:"customise",label:"Choose your tree",title:"Personal choice, in its own space.",text:"A separate collection screen to switch trees.",video:"/fitsapp-case/recording/choose-tree.mp4",note:"Locked trees hint at rewards but may add pressure."},
{id:"outcome",label:"Testing & reflection",title:"Encouraging early feedback. Longer-term impact still to test.",text:"Informal sessions gave positive feedback. Not evidence of more exercise.",note:"Next: test goal-setting, understanding of growth, and walking over time."}
]}/>;}

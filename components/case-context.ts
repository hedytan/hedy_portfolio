export const caseContext = {
 fitsapp: {
  number:'02', year:'2025', context:'Apple Foundation Program · Kiwi Kuties', role:'UX research & interface design',
  question:'How might we make everyday walking feel rewarding enough to return to?',
  image:'/fitsapp-case/recording/progress-recording.png', tags:['UX research','Interaction design','Gamification','UI design','Prototyping'],
  audience:'Young people with sedentary routines', audienceText:'People who sit for long stretches. We start with one small action: walking.', goals:['Notice everyday activity','Understand progress at a glance','Make the experience personal'],
  insights:[['Small efforts need visible feedback','The tree makes small progress easy to see.'],['Play needs a concrete measure','Growth is the reward; the step count keeps it clear.'],['Motivation should not become pressure','A shrinking tree could feel punishing. Untested.']],
  before:['Long stretches sitting','Walking receives little attention','Small efforts are hard to notice','Progress feels abstract'], after:['Choose a walking goal','See the step total','Watch the tree grow','Personalise the tree'],
  decisions:[['Tree + step count','Playful growth, with a number for clarity.'],['A separate customisation view','Keeps the main screen on progress. Cost: one extra step.'],['Walking as the first use case','Simple to grasp, but leaves out activities steps can’t capture.'],['Treat missed days carefully','Missing data isn’t inactivity. The effect of losing growth is untested.']]
 },
 resonance: {
  number:'01', year:'2026', context:'Independent iOS project', role:'Research · UI/UX design · SwiftUI development',
  question:'How might artists and listeners connect through the feeling behind a song?',
  image:'/resonance/screens/welcome.jpeg',tags:['Product thinking','Interaction design','UI design','SwiftUI','PencilKit'],
  audience:'Music makers and curious listeners', audienceText:'Resonance explores a space where artists can share unfinished thoughts and listeners can bring their own interpretation. This is the intended audience, rather than a validated research persona.',goals:['Share the context behind music','Express a personal response','Connect without needing the same feeling'],
  insights:[['The story can matter as much as the track','My starting observation was that polished social profiles leave little room for the feeling behind creative work.'],['Connection does not require agreement','A joyful song can bring back a sad memory. The response should leave room for both interpretations.'],['Expression needs more than one format','Preset moods offer a starting point; words and custom drawings let people express what a label misses.']],
  before:['Encounter a polished post','See the finished work','React with a broad signal','The personal interpretation stays hidden'],after:['Discover a personal moment','Read the thought and hear the music','Choose or write a feeling','See both emotions together'],
  decisions:[['Moments over a content board','Moved away from a Pinterest-style board to put feelings and short thoughts first.'],['A restrained dark interface','Reduce visual competition so words, music and mood shapes carry the experience.'],['Short thoughts, optional imagery','A 200-character limit lowers the scope of a post but restricts longer stories. Photos remain optional.'],['Responses over simple approval','Suggested responses help people start but can steer their words. Visible totals may still invite comparison.']]
 }
} as const;

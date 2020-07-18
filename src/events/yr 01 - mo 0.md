---
title: Learning to Explore
age: 1
---
To explore things, by shaking, banging or throwing them. <Mod stat="INT"></Mod>

To walk while holding on to furniture. <Mod stat="STA"></Mod>

<Prompt> What was your first word?</Prompt>

<Choice label="Ma-Ma">

# Your first word was "Ma-Ma"!
Your mom looks at you with loving eyes. <Mod relationship="mom" value="5"></Mod>
    
Meanwhile in the back your dad looks down, envious. <Mod relationship="dad" value="-5"></Mod>
    
</Choice>
<Choice label="Da-Da">

# Your first word was "Da-Da"!
Your dad looks at you with loving eyes.  <Mod relationship="dad" value="5"></Mod>

Meanwhile in the back your mom smirks, envious. <Mod relationship="mom" value="-5"></Mod>

</Choice>
<Choice label="Ma-Gik">

# Your first word was "Ma-Gik"!
Right from birth your interests are clear.    <Mod skill="Arcana"  value="5"></Mod>

Meanwhile in the back your parents smirk, envious. <Mod relationship="dad" value="-5"></Mod> <Mod relationship="mom" value="-5"></Mod>

</Choice>
<Choice label="Greetings" stat="COM" value="1">

# Your first word was "Greetings"!
Your parents are shocked at how eloquent you are at such a young age! 

<Mod relationship="mom" value="5"></Mod> 

<Mod relationship="dad" value="5"></Mod>
    
</Choice>
<Else>

# Your first word was "Goooooga"!
Your parents laugh. Nice try, maybe next week.

</Else>

---
title: Learning to Explore
age: 1
---
To explore things, by shaking, banging or throwing them. <Add stat="INT"></Add>

To walk while holding on to furniture. <Add stat="STA"></Add>

<Prompt> What was your first word?</Prompt>

<Choice label="Ma-Ma">

# Your first word was "Ma-Ma"!
Your mom looks at you with loving eyes. <Add relationship="mom" value="5"></Add>
    
Meanwhile in the back your dad looks down, envious. <Add relationship="dad" value="-5"></Add>
    
</Choice>
<Choice label="Da-Da">

# Your first word was "Da-Da"!
Your dad looks at you with loving eyes.  <Add relationship="dad" value="5"></Add>

Meanwhile in the back your mom smirks, envious. <Add relationship="mom" value="-5"></Add>

</Choice>
<Choice label="Ma-Gik">

# Your first word was "Ma-Gik"!
Right from birth your interests are clear.    <Add skill="Arcana"  value="5"></Add>

Meanwhile in the back your parents smirk, envious. <Add relationship="dad" value="-5"></Add> <Add relationship="mom" value="-5"></Add>

</Choice>
<Choice label="Greetings" stat="COM" value="1">

# Your first word was "Greetings"!
Your parents are shocked at how eloquent you are at such a young age! 

<Add relationship="mom" value="5"></Add> 

<Add relationship="dad" value="5"></Add>
    
</Choice>
<Else>

# Your first word was "Goooooga"!
Your parents laugh. Nice try, maybe next week.

</Else>

# Tutorial

inline styling: syling within the tag using the style attribute<br />
embedded styling: styling elements using thre style tag<br />
\*external styling: styling elements by using .css files and link it using <link> tag<br />

ID can only be used once in a page and is unique<br />
classes can be used multiple times<br />
<br />
bottom most styling always gets applied on the html page<br />
child tags inherit the styling of parnet tags<br />
<br />
Selector Hierarchy from top to bottom:<br />
ID<br />
Class<br />
Element(tag)<br />
<br />
!important is used to set that property globally and overrides all styles<br />
<br />
for immeditate children to get the styling:<br />
\#selector > tag{}<br />
<br />
for adjacent tags to be styled:<br />
link:https://www.youtube.com/watch?v=K92X4yyyfNY&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT&index=17<br />
\#selector pev tag + adjacent tag{}<br />
<br />
styling tags with a particular attribute:<br />
link:https://www.youtube.com/watch?v=GVocONem9lw&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT&index=18<br />
tag[attribute_name]{}<br />
or tag[attribute_name="attribute_property"]{} #to be more specific<br />
or<br />
tag[attribute_name(selector)="partial_property"]<br />
Eg:<br />
span[class~="deck"] #class containing deck with remaining properties space seperated<br />
span[class^="deck"] #class starts with deck<br />

Universal Selector<br />
_{} #selects all the tags<br />
Used basically for css reset<br />
_{<br />
margin :0px;<br />
padding:0px;<br />
color:black;<br />
}<br />

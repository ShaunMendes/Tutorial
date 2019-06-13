# Tutorial

inline styling: syling within the tag using the style attribute
embedded styling: styling elements using thre style tag
\*external styling: styling elements by using .css files and link it using <link> tag

ID can only be used once in a page and is unique
classes can be used multiple times

bottom most styling always gets applied on the html page
child tags inherit the styling of parnet tags

Selector Hierarchy from top to bottom:
ID
Class
Element(tag)

!important is used to set that property globally and overrides all styles

for immeditate children to get the styling:
\#selector > tag{}

for adjacent tags to be styled:
link:https://www.youtube.com/watch?v=K92X4yyyfNY&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT&index=17
\#selector pev tag + adjacent tag{}

styling tags with a particular attribute:
link:https://www.youtube.com/watch?v=GVocONem9lw&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT&index=18
tag[attribute_name]{}
or tag[attribute_name="attribute_property"]{} #to be more specific
or
tag[attribute_name(selector)="partial_property"]
Eg:
span[class~="deck"] #class containing deck with remaining properties space seperated
span[class^="deck"] #class starts with deck

Universal Selector
_{} #selects all the tags
Used basically for css reset
_{
margin :0px;
padding:0px;
color:black;
}

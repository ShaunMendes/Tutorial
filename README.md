# LESS

In-depth guide:<http://lesscss.org/features/#variables-feature>

## Variables

@&lt;variable_name&gt;:&lt;value&gt;

Eg:  
@deepgreen : green

.a{  
 background-color:@deepgreen  
}

Can be used with selectors as well
@my-selector : branner
@{my-selector}:{
width:100px;
}

Can also be used for css properties
@property: color;
.widget {
@{property}: #0ee;
background-@{property}: #999;
}

Variables can also be declared after used(lazy evaludation)
.lazy-eval {
width: 9%;
}

Properties can also be used as variables
.widget {
color: #efefef;
background-color: \$color;
}

## Parent Selectors

Used to apply multiple events to parents
a {
color: blue;
&:hover {
color: green;
}
}

## Extend

Used to add one class selector on another
nav ul {
&:extend(.inline);
background: blue;
}
.inline {
color: red;
}

## Mixin

Note: Reusable piece of code
As much as possible use it with extends keyword to prevent duplication of code
Event selectors can be used as mixins

Declaration

- type1: .&lt;mixin_name&gt; {&lt;css&gt;}  
  Eg  
  .banner{color:green}  
  .a{  
  .banner();  
  text-align:right;  
  }

- type2: .&lt;mixin_name&gt;(@&lt;variable_name&gt;,@&lt;variable_name&gt;){&lt;css&gt;}  
   Eg  
   .grid(@cols, @mrgn){  
   margin-right:@mrgn  
  margin-left:@mrgn  
   width:((100% - ((@cols-1)\*@mrgn))/@cols)  
  &:nth-child(#{@cols}n){  
   margin-right:0;  
   }  
   }  
   .a{  
   .grid(4, 2%)  
   }

- type3:.&lt;mixin_name&gt;(@&lt;variable_name&gt;,@&lt;variable_name&gt;){@return &lt;css&gt;}
  Eg:

  .average(@x, @y) {
  @result: ((@x + @y) / 2);
  }

- mixin guards:
  .mixin(@a) when (lightness(@a) >= 50%) {
  background-color: black;
  }
  .mixin(@a) when (lightness(@a) < 50%) {
  background-color: white;
  }
  .mixin(@a) {
  color: @a;
  }

- Aliasing
  #theme.dark.navbar {
  .colors(light) {
  primary: purple;
  }
  .colors(dark) {
  primary: black;
  secondary: grey;
  }
  }
  .navbar {
  @colors: #theme.dark.navbar.colors(dark);
  background: @colors[primary];
  border: 1px solid @colors[secondary];
  }

## Imports

Warning: @import will be deprecated with @use because it helps in scoping and create private instances.

@import \"&lt;file_path_without_ext&gt;\"

## Arithmetic

.a{width:(45px+7) add  
.a{width:(45px-7) sub  
.a{width:(45px/7) div  
.a{width:(45px\*7) mul

Eg:  
.a{width:(100%/5) automatically divides the div equally into equal parts

## Color

Built-in functions: <http://lesscss.org/functions/#color-definition>

## Media Queries

Link: <https://www.w3schools.com/cssref/css3_pr_mediaquery.asp>

## If Statement

if ((condition), true_value, false_value)
Eg  
@some: foo;

div {
margin: if((2 > 1), 0, 3px);
color: if((iscolor(@some)), darken(@some, 10%), black);
}

# SCSS/SASS

## Variables

$&lt;variable_name&gt;:&lt;value&gt

eg:
$deepgreen : green
.a{  
    background-color:$&lt;variable_name&gt;  
}  

## Mixin

Note: Reusable piece of code

Declaration

* type1: @mixin &lt;variable_name&gt; {&lt;css&gt;}  
eg  
@mixin banner{color:green}  
.a{  
&nbsp;&nbsp;&nbsp;@include banner;  
&nbsp;&nbsp;&nbsp;text-align:right;  
}  
.a{  
&nbsp;&nbsp;&nbsp;@include banner;  
&nbsp;&nbsp;&nbsp;text-align:left  
}  

* type2: @mixin &lt;variable_name&gt;($&lt;variable_name&gt;,$&lt;variable_name&gt;){&lt;css&gt;}
eg  
@mixin grid($cols, $mrgn){  
&nbsp;&nbsp;&nbsp;margin-right:$mrgn  
&nbsp;&nbsp;&nbsp;margin-left:$mrgn  
width:((100% - (($cols-1)*$mrgn))/$cols)
&:nth-child(#{$cols}n){  
margin-right:0;
}
}  
.a{  
&nbsp;&nbsp;&nbsp;@include banner;  
&nbsp;&nbsp;&nbsp;text-align:right;  
}  

## Imports

@import "&lt;file_path_without_ext&gt;"

## Arithmetic

.a{width:(45px+7) add  
.a{width:(45px-7) sub  
.a{width:(45px/7) div  
.a{width:(45px*7) mul  
  
eg:  
.a{width:(100%/5) automatically divides the div equally into equal parts  
# SCSS/SASS

## Variables

$&lt;variable_name&gt;:&lt;value&gt  

Eg:  
$deepgreen : green  

.a{  
    background-color:$&lt;variable_name&gt;  
}  

## Mixin

Note: Reusable piece of code  

Declaration  

* type1: @mixin &lt;variable_name&gt; {&lt;css&gt;}  
Eg  
@mixin banner{color:green}  
.a{  
@include banner;  
text-align:right;  
}  
.a{  
@include banner;  
text-align:left  
}  

* type2: @mixin &lt;variable_name&gt;($&lt;variable_name&gt;,$&lt;variable_name&gt;){&lt;css&gt;}  
Eg  
@mixin grid($cols, $mrgn){  
margin-right:$mrgn  
margin-left:$mrgn  
width:((100% - (($cols-1)*$mrgn))/$cols)  
&:nth-child(#{$cols}n){  
margin-right:0;  
}  
}  
.a{  
  @include grid(4, 2%)  
}  

## Imports

@import "&lt;file_path_without_ext&gt;"  

## Arithmetic

.a{width:(45px+7) add  
.a{width:(45px-7) sub  
.a{width:(45px/7) div  
.a{width:(45px*7) mul  
  
Eg:  
.a{width:(100%/5) automatically divides the div equally into equal parts  

## Color

Built-in functions: <https://sass-lang.com/documentation/modules>  
Eg:  
lighten($color, $amount)  
complement($color) finds the complement of that particular color(used for matching text to background)  

## Media Queries

Link: <https://www.w3schools.com/cssref/css3_pr_mediaquery.asp>  

## @content Keyword

Adds block of code in place of @content  

Eg:  

@mixin mQ($args){  
@media screen  and (max-width: $args){  
@content  
}  
}  

.a{  
.b{  
@include(600px){  
{width:100%}  
}  
}  
}  

## If Statement

@if &lt;condition&gt; {}  

Eg  
@mixin mQ($args...){  
        if length(args)==1{  
        @media screen  and (max-width: n-th($args,1)){  
            @content  
        }  
    }  
        if length(args)==2{  
        @media screen  and (max-width: n-th($args,1)) and (min-width: n-th($args,2)){  
            @content  
        }  
    }  
}
BootWill
==============

***A .SASS-based framework for generating responsive styles for your content***


By adding new values to the array **$sizes** at the top of *bootwill.sass* then compiling the document, you can generate new responsive width assignments with minimal effort. Breakpoints for tablets and smartphones included! You can also adjust the margin by changing the **$marginX/Y** variable, just make sure it isn't higher than half of your smallest size or it will result in elements with 0 width.

```
/*Define your sizes and margin here*/
$sizes: (20) (25) (34) (50) (66) (75) (100);

/*Margin between items, should be under half of your smallest size*/
$margin: 0.5;

/*Defines Breakpoints*/
$tablet: 1024px;
$smartphone: 600px;

/*Standard sizes for breakpoints*/
@mixin fullWidth(){
	width:#{100 - $margin*2}%;
	margin:#{$margin}%;
}
@mixin halfWidth(){
	width:#{50 - $margin*2}%;
	margin:#{$margin}%;
}
@mixin quarterWidth(){
	width:#{25 - $margin*2}%;
	margin:#{$margin}%;
}

/*Generates all width assignments*/
@each $size, $i in $sizes{
	.bw#{$size}{
		width:#{$size - $margin*2}%;
		margin:#{$margin}%;
	}
}

/*Generate query for tablet - any size under 50%, becomes 50%. Any size at or above 50% becomes 100%.*/
@media (max-width:$tablet){
	@each $size, $i in $sizes{
		@if($size < 20){
			.bw#{$size}{@include quarterWidth();}
		}
		@else if($size < 50){
			.bw#{$size}{@include halfWidth();}
		}
		@else{
			.bw#{$size}{@include fullWidth();}
		}
	}
}

/*Generate query for mobile - all sizes take up the full screen width.*/
@media (max-width:$smartphone){
	@each $size, $i in $sizes{
		@if($size < 20){
			.bw#{$size}{@include halfWidth();}
		}
		@else{
			.bw#{$size}{@include fullWidth();}
		}
	}
}
```

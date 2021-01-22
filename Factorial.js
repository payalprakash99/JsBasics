function fact(a) 
{ 
	var fact=1;
	for (i = 0; i < a; i++) 
	{ 
         fact=a*fact;
         a--;
	} 
	return fact;
} 
console.log(fact(3)+'\n');

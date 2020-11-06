function calculateMyBill()
{
	var unit=document.getElementById("bill").value;
	var total1=7.85;
	var total2=7.85;
	var total3=10;
	var total4=27.75;
	var total5=32;
	var price=0;
	
	if(unit<30)
	{
		price=total1*unit;
	}

		else if(unit>=30 && unit<60)
		{
			price=(30*total1)+(total2*(unit-30));
		}
		else if(unit>=60 && unit<90)
		{
			price=(30*total1)+(30*total2)+(total3*(unit-60));
		}
		else if(unit>=90 && unit<120)
		{
			price=(30*total1)+(30*total2)+(30*total3)+(total4*(unit-90));
		}
		else
		{
			price=(30*total1)+(30*total2)+(30*total3)+(30*total4)+(total5*(unit-120));
		}
	var txtResult=document.getElementById("calcu");
	txtResult.innerHTML=price;
	
	
}
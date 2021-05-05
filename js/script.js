
function Eler1(){
	let f=[];
	let hf=[];
	let y=[];
	let x=[];
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let u0 = Number(document.getElementById('u0').value);
	let tbl = document.querySelector('table');
	
	x[0]=a;
	y[0]=u0;
	f[0]=2*y[0]/x[0];
	hf[0]=f[0]*(b-a)/10;
	for (let i = 1; i <11; i++) {
		x[i]=parseFloat(parseFloat(x[i-1]+((b-a)/10)).toFixed(1));
		y[i]=parseFloat(parseFloat(y[i-1]+hf[i-1]).toFixed(2));
		f[i]=parseFloat(parseFloat(2*y[i]/x[i]).toFixed(4));
		hf[i]=parseFloat(parseFloat(f[i]*(b-a)/10).toFixed(4));
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 5; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = x[i-1];
     	tbl.rows[i].cells[2].innerText = y[i-1];
     	tbl.rows[i].cells[3].innerText = f[i-1];
     	tbl.rows[i].cells[4].innerText = hf[i-1];
	} 
}

function Eler2(){
	let f=[];
	let t=[];
	let y=[];
	let x=[];
	let a = Number(document.getElementById('eler2_a').value);
	let b = Number(document.getElementById('eler2_b').value);
	let u0 = Number(document.getElementById('eler2_u(x0)').value);
	let u20 = Number(document.getElementById('eler2_u2(x0)').value);
	let tbl = document.getElementById('table_eler2');
	
	let h = (b-a)/10;
	x[0]=a;
	y[0]=u0;
	t[0]=u20;
	f[0]=t[0]+Math.exp(x[0]);
	
	for (let i = 1; i <11; i++) {
		x[i]=x[i-1]+h;
		y[i]=y[i-1]+h*t[i-1];
		f[i]=y[i]+Math.exp(x[i]);
		t[i]=t[i-1]+f[i]*h;
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 5; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = parseFloat(parseFloat(x[i-1].toFixed(4)));
     	tbl.rows[i].cells[2].innerText = parseFloat(parseFloat(y[i-1].toFixed(4)));
     	tbl.rows[i].cells[3].innerText = parseFloat(parseFloat(f[i-1].toFixed(4)));
     	tbl.rows[i].cells[4].innerText = parseFloat(parseFloat(t[i-1].toFixed(4)));
	}
}

function Runge1(){

	if (document.getElementById('runge1_metod').value==1){
	let f=[];
	let x=[];
	let y=[];
	let k1=[];
	let k2=[];
	let dy=[];
	let a = Number(document.getElementById('runge1_a').value);
	let b = Number(document.getElementById('runge1_b').value);
	let u0 = Number(document.getElementById('runge1_u0').value);
	let tbl = document.getElementById('runge1_table2');
	let h = (b-a)/10;


	x[0]=parseFloat(a);
	y[0]=parseFloat(u0);
	k1[0]=h*2*y[0]/x[0];
	k2[0]=h*2*(y[0]+k1[0])/(x[0]+h);
	dy[0]=(k1[0]+k2[0])/2;
	for (let i = 1; i <11; i++) {
		x[i]=x[i-1]+h;
		y[i]=y[i-1]+dy[i-1];
		k1[i]=h*2*y[i]/x[i];
		k2[i]=h*2*(y[i]+k1[i])/(x[i]+h);
		dy[i]=(k1[i]+k2[i])/2;
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 7; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = parseFloat(parseFloat(x[i-1].toFixed(4)));
     	tbl.rows[i].cells[2].innerText = parseFloat(parseFloat(y[i-1].toFixed(4)));
     	tbl.rows[i].cells[3].innerText = parseFloat(parseFloat(k1[i-1].toFixed(4)));
     	tbl.rows[i].cells[4].innerText = parseFloat(parseFloat(k2[i-1].toFixed(4)));
     	tbl.rows[i].cells[5].innerText = parseFloat(parseFloat(dy[i-1].toFixed(4)));
		}
	}else if (document.getElementById('runge1_metod').value==2){

	let f=[];
	let x=[];
	let y=[];
	let k1=[];
	let k2=[];
	let k3=[];
	let k4=[];
	let dy=[];
	let a = Number(document.getElementById('runge1_a').value);
	let b = Number(document.getElementById('runge1_b').value);
	let u0 = Number(document.getElementById('runge1_u0').value);
	let tbl = document.getElementById('runge1_table4');
	let h = (b-a)/10;


	x[0]=parseFloat(a);
	y[0]=parseFloat(u0);
	k1[0]=2*y[0]/x[0];
	k2[0]=2*(y[0]+(h/2*k1[0]))/(x[0]+(h/2));
	k3[0]=2*(y[0]+(h/2*k2[0]))/(x[0]+(h/2));
	k4[0]=2*(y[0]+(h*k3[0]))/(x[0]+h);
	dy[0]=(h/6)*(k1[0]+2*k2[0]+2*k3[0]+k4[0]);
	for (let i = 1; i <11; i++) {
		x[i]=x[i-1]+h;
		y[i]=y[i-1]+dy[i-1];
		k1[i]=2*y[i]/x[i];
		k2[i]=2*(y[i]+(h/2*k1[i]))/(x[i]+(h/2));
		k3[i]=2*(y[i]+(h/2*k2[i]))/(x[i]+(h/2));
		k4[i]=2*(y[i]+(h*k3[i]))/(x[i]+h);
		dy[i]=(h/6)*(k1[i]+2*k2[i]+2*k3[i]+k4[i]);
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 7; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = parseFloat(parseFloat(x[i-1].toFixed(4)));
     	tbl.rows[i].cells[2].innerText = parseFloat(parseFloat(y[i-1].toFixed(4)));
     	tbl.rows[i].cells[3].innerText = parseFloat(parseFloat(k1[i-1].toFixed(4)));
     	tbl.rows[i].cells[4].innerText = parseFloat(parseFloat(k2[i-1].toFixed(4)));
     	tbl.rows[i].cells[5].innerText = parseFloat(parseFloat(k3[i-1].toFixed(4)));
     	tbl.rows[i].cells[6].innerText = parseFloat(parseFloat(k4[i-1].toFixed(4)));
     	tbl.rows[i].cells[7].innerText = parseFloat(parseFloat(dy[i-1].toFixed(4)));
		}
	}
}

function Runge2(){

	if (document.getElementById('runge2_metod').value==1){
	let x=[];
	let y=[];
	let t=[];
	let k1=[];
	let l1=[];
	let k2=[];
	let l2=[];
	let a = Number(document.getElementById('runge2_a').value);
	let b = Number(document.getElementById('runge2_b').value);
	let u0 = Number(document.getElementById('runge2_u(x0)').value);
	let u20 = Number(document.getElementById('runge2_u2(x0)').value);
	let tbl = document.getElementById('runge2_table2');
	let h = (b-a)/10;

	x[0]=parseFloat(a);
	y[0]=parseFloat(u0);
	t[0]=parseFloat(u20);
	k1[0]=t[0]*h;
	l1[0]=y[0]*h;
	k2[0]=h*(l1[0]+t[0]);
	l2[0]=h*(y[0]+k1[0]);
	
		for (let i = 1; i <11; i++) {
		x[i]=x[i-1]+h;
		y[i]=y[i-1]+((k1[i-1]+k2[i-1])/2);
		t[i]=t[i-1]+((l1[i-1]+l2[i-1])/2);
		k1[i]=t[i]*h;
		l1[i]=y[i]*h;
		k2[i]=h*(l1[i]+t[i]);
		l2[i]=h*(y[i]+k1[i]);
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 7; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = parseFloat(parseFloat(x[i-1].toFixed(4)));
     	tbl.rows[i].cells[2].innerText = parseFloat(parseFloat(y[i-1].toFixed(4)));
     	tbl.rows[i].cells[3].innerText = parseFloat(parseFloat(t[i-1].toFixed(4)));
     	tbl.rows[i].cells[4].innerText = parseFloat(parseFloat(k1[i-1].toFixed(4)));
     	tbl.rows[i].cells[5].innerText = parseFloat(parseFloat(l1[i-1].toFixed(4)));
     	tbl.rows[i].cells[6].innerText = parseFloat(parseFloat(k2[i-1].toFixed(4)));
     	tbl.rows[i].cells[7].innerText = parseFloat(parseFloat(l2[i-1].toFixed(4)));
		}
	}else if (document.getElementById('runge2_metod').value==2){

	let x=[];
	let y=[];
	let t=[];
	let k1=[];
	let l1=[];
	let k2=[];
	let l2=[];
	let k3=[];
	let l3=[];
	let k4=[];
	let l4=[];
	let du=[];
	let dt=[];
	let a = Number(document.getElementById('runge2_a').value);
	let b = Number(document.getElementById('runge2_b').value);
	let u0 = Number(document.getElementById('runge2_u(x0)').value);
	let u20 = Number(document.getElementById('runge2_u2(x0)').value);
	let tbl = document.getElementById('runge2_table4');
	let h = (b-a)/10;

	x[0]=parseFloat(a);
	y[0]=parseFloat(u0);
	t[0]=parseFloat(u20);
	k1[0]= t[0]*h;
	l1[0]= h*(y[0]+Math.exp(x[0]));
	k2[0]= h*(y[0]+l1[0]/2);
	l2[0]= h*((y[0]+k1[0]/2)+Math.exp(x[0]+h/2));
	k3[0]= h*(t[0]+l2[0]/2);
	l3[0]= h*((y[0]+k2[0]/2)+Math.exp(x[0]+h/2));
	k4[0]= h*(t[0]+l3[0]);
	l4[0]= h*((y[0]+k3[0])+Math.exp(x[0]+h));
	du[0]=(k1[0]+2*k2[0]+2*k3[0]+k4[0])/6;
	dt[0]=(l1[0]+2*l2[0]+2*l3[0]+l4[0])/6;
	for (let i = 1; i <11; i++) {
		x[i]=x[i-1]+h;
		y[i]=y[i-1]+du[i-1];
		t[i]=t[i-1]+dt[i-1];
		k1[i]= t[i]*h;
		l1[i]= h*(y[i]+Math.exp(x[i]));
		k2[i]= h*(y[i]+l1[i]/2);
		l2[i]= h*((y[i]+k1[i]/2)+Math.exp(x[i]+h/2));
		k3[i]= h*(t[i]+l2[i]/2);
		l3[i]= h*((y[i]+k2[i]/2)+Math.exp(x[i]+h/2));
		k4[i]= h*(t[i]+l3[i]);
		l4[i]= h*((y[i]+k3[i])+Math.exp(x[i]+h));
		du[i]=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6;
		dt[i]=(l1[i]+2*l2[i]+2*l3[i]+l4[i])/6;
	}
	
	for(let i = 1; i < 12; i++){
    for(let j = 0; j < 13; j++)
        tbl.rows[i].cells[0].innerText = i-1;
     	tbl.rows[i].cells[1].innerText = parseFloat(parseFloat(x[i-1].toFixed(4)));
     	tbl.rows[i].cells[2].innerText = parseFloat(parseFloat(y[i-1].toFixed(4)));
     	tbl.rows[i].cells[3].innerText = parseFloat(parseFloat(t[i-1].toFixed(4)));
     	tbl.rows[i].cells[4].innerText = parseFloat(parseFloat(k1[i-1].toFixed(4)));
     	tbl.rows[i].cells[5].innerText = parseFloat(parseFloat(l1[i-1].toFixed(4)));
     	tbl.rows[i].cells[6].innerText = parseFloat(parseFloat(k2[i-1].toFixed(4)));
     	tbl.rows[i].cells[7].innerText = parseFloat(parseFloat(l2[i-1].toFixed(4)));
     	tbl.rows[i].cells[8].innerText = parseFloat(parseFloat(k3[i-1].toFixed(4)));
     	tbl.rows[i].cells[9].innerText = parseFloat(parseFloat(l3[i-1].toFixed(4)));
     	tbl.rows[i].cells[10].innerText = parseFloat(parseFloat(k4[i-1].toFixed(4)));
     	tbl.rows[i].cells[11].innerText = parseFloat(parseFloat(l4[i-1].toFixed(4)));
		}
	}
}

function Simplex(){

	let tbl = document.getElementById('simplex_table');
	let restrictions1 =	[Number(document.getElementById('x1_1').value), Number(document.getElementById('x2_1').value), Number(document.getElementById('x3_1').value)];
	let restrictions2 =	[Number(document.getElementById('x1_2').value), Number(document.getElementById('x2_2').value), Number(document.getElementById('x3_2').value)];
	let restrictions3 =	[Number(document.getElementById('x1_3').value), Number(document.getElementById('x2_3').value), Number(document.getElementById('x3_3').value)];
	let restrictions4 =	[Number(document.getElementById('x1_4').value), Number(document.getElementById('x2_4').value), Number(document.getElementById('x3_4').value)];
	
	var x=[0, 0, 0];
	var rightRestrictions = [Number(document.getElementById('y_1').value), Number(document.getElementById('y_2').value), Number(document.getElementById('y_3').value)];
	var max = 0;
	var max_new = 1;
	var max1 = 0;
	var max2 = 0;
	var max3 = 0;
	var i_m = restrictions_max(restrictions1[0],restrictions2[0],restrictions3[0],rightRestrictions[0],rightRestrictions[1],rightRestrictions[2]);
	var j_m = restrictions_max(restrictions1[1],restrictions2[1],restrictions3[1],rightRestrictions[0],rightRestrictions[1],rightRestrictions[2]);
	var k_m = restrictions_max(restrictions1[2],restrictions2[2],restrictions3[2],rightRestrictions[0],rightRestrictions[1],rightRestrictions[2]);

 	for (i = 0; i<i_m; i++){
 		for (var j = 0 ; j<j_m ; j++){
 			for (var k = 0; k<k_m; k++){
 				max1 = i*Number(restrictions1[0]) + j*Number(restrictions1[1]) + k*Number(restrictions1[2]);
 				max2 = i*Number(restrictions2[0]) + j*Number(restrictions2[1]) + k*Number(restrictions2[2]);
 				max3 = i*Number(restrictions3[0]) + j*Number(restrictions3[1]) + k*Number(restrictions3[2]);
 				max_new = i*Number(restrictions4[0]) + j*Number(restrictions4[1]) + k*Number(restrictions4[2])
 				if (((Number(max)<Number(max_new)) && (Number(max1)<=Number(rightRestrictions[0])) && (Number(max2)<=Number(rightRestrictions[1])) && (Number(max3)<=Number(rightRestrictions[2])))){
 					x[0]= i;
 					x[1]= j;
 					x[2]= k;
 					max = max_new;
 				}
 			}
 		}
 	}

	tbl.rows[2].cells[1].innerText = Number(max);

	for (var i = 0; i <3; i++) {
		tbl.rows[1].cells[i].innerText	= x[i];
	}
}

function sign(type){
	if (type==1){
		return ">=";
	}else if (type==2){
		return "=";
	}else if (type==3) {
		return "<=";
	}
}

function restrictions_max(row1,row2,row3,restrictions1,restrictions2,restrictions3){
	var max = 0;
	max = restrictions1/row1;
	if (max<(restrictions2/row2)){
		max=restrictions2/row2;
	}else if (max<(restrictions3/row3)){
		max=restrictions3/row3;
	}
	return max;
}


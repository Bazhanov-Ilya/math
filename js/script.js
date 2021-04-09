
function Eler1()
{
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


function Runge1(){
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
	let tbl = document.getElementById('runge1_table');
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


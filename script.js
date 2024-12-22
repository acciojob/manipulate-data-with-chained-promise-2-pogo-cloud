//your JS code here. If required.
const p=new Promise((res)=>{
	setTimeout(() => {
        let array = [1, 2, 3, 4];
        res(array);
    }, 3000);
});
function resolveArray(){
	p.then((data)=>{
		let even=data.filter((num)=>num%2==0);
		  setTimeout(()=>{
			  let ele=document.getElementById("output");
			  ele.innerHTML=even;
		  },1000);
		 return even;
	}).then((even)=>{
		let double=even.map((i)=>i*2);
		setTimeout(()=>{
			  let ele=document.getElementById("output");
			  ele.innerHTML=double;
		  },2000);
		
	})
}
resolveArray();
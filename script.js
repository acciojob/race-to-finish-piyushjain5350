window.promises = [];
const output=document.getElementById("output");

for(let i=1;i<=5;i++){
	promises.push(
		new Promise(resolve=>{
			setTimeout(()=>{
				resolve(i)
			},1000*i)
		})
	)
}
Promise.any(promises)
.then((res)=>{
	output.innerHTML=res;
})
.catch(error=>{
	console.log(error);
})
// Do not change the code above this
// add your promises to the array `promises`

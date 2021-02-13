let textTest = prompt('Enter the text to be searched');
// console.log(textTest)
let links = document.links;
// console.log(links)
let length = document.links.length 
// console.log(length)
let flag = 0;
for (let i = 0; i < length; i++) {
    let a = links[i].href;
    if(a.search(textTest)!=-1)
    {
        flag = 1;
        console.log(a);
    }
}
if (flag==0)
console.log('No link containing the text');
let n=[10,20,30];
let sum=0;
function average ()
{
    for(i=0;i<n.length;i++)
    {
        sum=sum + n[i];
    }
    return sum/n.length;

}
console.log("average =",average ());

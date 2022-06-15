interface Counter{
    count: number
}
export function interval(data: Counter){
    setInterval(()=>data.count++,1000);
}
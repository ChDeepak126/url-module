import  {URL} from 'url';
const u= new URL(
    'https://www.example.com:8080/'+
    'products/list?category=books'+
    '&sort=asc#section2'
);
console.log(`Protocol=${u.protocol}`);
console.log(`Hostname=${u.hostname}`);
console.log(`Port=${u.port}`);
console.log(`Pathname=${u.pathname}`);
console.log(`Hash=${u.hash}`);
u.searchParams.forEach((v,k) => {
    console.log("searchParam:",k, '=', v);
});

n=5e8;S='.soundcloud.com/';h='https://';(await(await fetch(h+'qrng.anu.edu.au/API/jsonI.php?&type=uint8&length=99')).json(e=0,E=1)).data.map(N=>{e=e%n+E*N;E*=256;e<E-E%n?(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?open(u):0))(h+'w'+S+'player/?url='+h+'api'+S+'tracks/'+e%n,e=e/n|0,E=E/n|0):E%=n})

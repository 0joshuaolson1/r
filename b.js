try{N}catch(_){n=BigInt;N=n(4e9);e=n(0);E=n(1);h='https://';f=v=>{v=e%N;Array.from(Array(15)).map(u=>fetch(u=h+'bandcamp.com/EmbeddedPlayer/album='+(v++)).then(r=>r.text()).then(t=>t[7665]!='v'&&open(u)));e/=N;E/=N;E<N||setTimeout(f,2e3)}}f(e+=E*n('0x'+(await(await fetch(h+'qrng.anu.edu.au/API/jsonI.php?&type=hex16&length=16&size=1024')).json(E*=n(512)**n(8192))).data.join('')))

r=(u,c,x=new XMLHttpRequest())=>{x.open(c?'GET':'HEAD',u='https://'+u);x.onload=_=>c?c(JSON.parse(x.response).data):x.status<403?open(u):0;x.send()};q=(n,u,v='',_)=>l=>r('qrng.anu.edu.au/API/jsonI.php?z='+Date.now()+'&type=uint8&length='+l,d=>{for(e=0,E=1;e<E-E%n?(r(u+e%n+v),e=e/n|0,E=E/n|0):E%=n;)for(e%=n;E<n;E*=256)e+=E*(d.length?d.pop():_[E])});c=q(5e8,'crt.sh/?id=');f=q(4e5,'fimfiction.net/story/download/','/html');S='.soundcloud.com/';s=q(5e8,'w'+S+'player/?url=http://api'+S+'tracks/')

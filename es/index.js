function e(e,r){const t=e.split("."),u=r.split(".");let m=!1,b=!0;return m=u.some(((e,r)=>(Number(t[r])<Number(e)&&(b=!1),Number(t[r])>Number(e)))),m&&b}export{e as compareVer};

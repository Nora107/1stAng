(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){c(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,c){var l=o.URL||o.webkitURL,b=document.createElement("a");b.download=i=i||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?a(b):n(b.href)?e(t,i,c):a(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){a(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(n(t))e(t,o,i);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){a(c)})}}:function(t,n,a,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var l="application/octet-stream"===t.type,b=/constructor/i.test(o.HTMLElement)||o.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||l&&b||i)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=r?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},s.readAsDataURL(t)}else{var d=o.URL||o.webkitURL,u=d.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?a.apply(e,[]):a)||(t.exports=o)},jkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",function(){return L});var a=n("ofXK"),o=n("fXoL"),i=n("H+bZ"),c=n("tyNb"),l=n("/t3+"),b=n("bTqV"),r=n("NFeN"),s=n("XhcP"),d=n("MutI"),u=n("FKr1");let p=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side",this.menu=[{name:"Dashboard",icon:"dashboard",url:"/admin/dashboard"},{group:"Menu Group",children:[{name:"Image Gallery",icon:"images",url:"/admin/gallery"}]}]}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a),o.Qb(c.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-admin"]],decls:33,vars:1,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side","opened","",1,"sidenav-left",3,"position"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["routerLink","/admin/images"]],template:function(t,e){if(1&t){const t=o.Xb();o.Ub(0),o.Wb(1,"mat-toolbar",0),o.Wb(2,"button",1),o.gc("click",function(){return o.zc(t),o.xc(14).toggle()}),o.Wb(3,"mat-icon"),o.Hc(4,"menu"),o.Vb(),o.Vb(),o.Wb(5,"span"),o.Hc(6,"My Angular"),o.Vb(),o.Rb(7,"div",2),o.Wb(8,"small"),o.Hc(9,"Admin"),o.Vb(),o.Wb(10,"button",3),o.gc("click",function(){return e.logout()}),o.Hc(11,"Keluar"),o.Vb(),o.Vb(),o.Wb(12,"mat-drawer-container",4),o.Wb(13,"mat-drawer",5,6),o.Wb(15,"mat-nav-list"),o.Wb(16,"mat-list-item",7),o.Wb(17,"mat-icon",8),o.Hc(18,"dashboard"),o.Vb(),o.Wb(19,"h3",9),o.Hc(20,"Dashboard"),o.Vb(),o.Vb(),o.Wb(21,"mat-list-item",10),o.Wb(22,"mat-icon",8),o.Hc(23,"camera_enhance"),o.Vb(),o.Wb(24,"h3",9),o.Hc(25,"Products"),o.Vb(),o.Vb(),o.Wb(26,"mat-list-item",11),o.Wb(27,"mat-icon",8),o.Hc(28,"camera_enchance"),o.Vb(),o.Wb(29,"h3",9),o.Hc(30,"Edit Image"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(31,"mat-drawer-content"),o.Rb(32,"router-outlet"),o.Vb(),o.Vb(),o.Tb()}2&t&&(o.Db(13),o.pc("position","start"))},directives:[l.a,b.a,r.a,s.b,s.a,d.d,d.b,c.b,d.a,u.j,s.c,c.d],styles:[".admin-container[_ngcontent-%COMP%]{position:absolute;top:60px;bottom:0;left:0;right:0}mat-drawer-content[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;align-items:flex-start;background-color:#ccc}.sidenav-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:250px}"]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Wb(0,"p"),o.Hc(1,"dashboard works!"),o.Vb())},styles:[""]}),t})();var m=n("0IaG");let h=(()=>{class t{constructor(t){this.dialog=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(m.b))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-gallery"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Wb(0,"h2"),o.Hc(1,"Image Gallery"),o.Vb())},styles:[".upload-icon[_ngcontent-%COMP%]{padding-bottom:100%;border-radius:10px;border:1px dashed #fff;margin-bottom:15px;position:relative}.upload-icon[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{position:absolute;text-align:center;width:100%;bottom:40%}"]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["app-images"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Wb(0,"p"),o.Hc(1,"images works!"),o.Vb())},styles:[""]}),t})();var k=n("w55g"),W=n("Iab2");let V=(()=>{class t{constructor(t,e,n){this.api=t,this.dialogRef=e,this.dialogData=n}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("books/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a),o.Qb(m.g),o.Qb(m.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","100px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"h1",0),o.Hc(1,"Unggah File"),o.Vb(),o.Wb(2,"div",1),o.Wb(3,"div",2),o.gc("click",function(){return o.zc(t),o.xc(7).click()}),o.Wb(4,"span"),o.Hc(5),o.Vb(),o.Vb(),o.Wb(6,"input",3,4),o.gc("change",function(t){return e.onFileChange(t)}),o.Vb(),o.Vb(),o.Wb(8,"div",5),o.Wb(9,"button",6),o.Hc(10,"Cancel"),o.Vb(),o.Wb(11,"button",7),o.gc("click",function(){return e.uploadFile()}),o.Hc(12),o.Vb(),o.Vb()}2&t&&(o.Db(5),o.Ic(e.selectedFile?e.selectedFile:"Pilih File"),o.Db(6),o.pc("disabled",e.loadingUpload),o.Db(1),o.Ic(e.loadingUpload?"Uploading...":"Upload"))},directives:[m.h,m.e,m.c,b.a,m.d],styles:[""]}),t})();var v=n("kmnG"),w=n("qFsG"),y=n("3Pt+");let H=(()=>{class t{constructor(t,e,n){this.dialogRef=t,this.data=e,this.api=n}ngOnInit(){}saveData(){null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(t)},t=>{alert(t)}):this.api.post("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t)},t=>{alert(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(m.g),o.Qb(m.a),o.Qb(i.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(o.Wb(0,"h3",0),o.Hc(1," Detail Produk "),o.Vb(),o.Wb(2,"div",1),o.Wb(3,"mat-form-field",2),o.Wb(4,"mat-label"),o.Hc(5,"Judul"),o.Vb(),o.Wb(6,"input",3),o.gc("ngModelChange",function(t){return e.data.title=t}),o.Vb(),o.Vb(),o.Wb(7,"mat-form-field",2),o.Wb(8,"mat-label"),o.Hc(9,"Penulis"),o.Vb(),o.Wb(10,"input",3),o.gc("ngModelChange",function(t){return e.data.author=t}),o.Vb(),o.Vb(),o.Wb(11,"mat-form-field",2),o.Wb(12,"mat-label"),o.Hc(13,"Penerbit"),o.Vb(),o.Wb(14,"input",3),o.gc("ngModelChange",function(t){return e.data.publisher=t}),o.Vb(),o.Vb(),o.Wb(15,"mat-form-field",2),o.Wb(16,"mat-label"),o.Hc(17,"Tahun Penerbit"),o.Vb(),o.Wb(18,"input",3),o.gc("ngModelChange",function(t){return e.data.year=t}),o.Vb(),o.Vb(),o.Wb(19,"mat-form-field",2),o.Wb(20,"mat-label"),o.Hc(21,"ISBN"),o.Vb(),o.Wb(22,"input",3),o.gc("ngModelChange",function(t){return e.data.isbn=t}),o.Vb(),o.Vb(),o.Wb(23,"mat-form-field",2),o.Wb(24,"mat-label"),o.Hc(25,"Harga"),o.Vb(),o.Wb(26,"input",4),o.gc("ngModelChange",function(t){return e.data.price=t}),o.Vb(),o.Vb(),o.Vb(),o.Wb(27,"div",5),o.Wb(28,"button",6),o.Hc(29,"Batal"),o.Vb(),o.Wb(30,"button",7),o.gc("click",function(){return e.saveData()}),o.Hc(31),o.Vb(),o.Vb()),2&t&&(o.Db(6),o.pc("ngModel",e.data.title),o.Db(4),o.pc("ngModel",e.data.author),o.Db(4),o.pc("ngModel",e.data.publisher),o.Db(4),o.pc("ngModel",e.data.year),o.Db(4),o.pc("ngModel",e.data.isbn),o.Db(4),o.pc("ngModel",e.data.price),o.Db(4),o.pc("disabled",e.loading),o.Db(1),o.Ic(e.loading?"Menyimpan..":"Simpan"))},directives:[m.h,m.e,v.b,v.e,w.b,y.c,y.i,y.k,y.m,m.c,b.a,m.d],styles:[""]}),t})();var D=n("Xa2L"),x=n("Wp6s");function I(t,e){1&t&&(o.Wb(0,"div",2),o.Rb(1,"mat-spinner",3),o.Vb())}function M(t,e){if(1&t){const t=o.Xb();o.Wb(0,"button",13),o.gc("click",function(){o.zc(t);const e=o.kc().$implicit;return o.kc(2).downloadFile(e)}),o.Wb(1,"mat-icon"),o.Hc(2,"download"),o.Vb(),o.Vb()}}function F(t,e){if(1&t){const t=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td"),o.Fc(2,M,3,0,"button",10),o.Vb(),o.Wb(3,"td"),o.Hc(4),o.Vb(),o.Wb(5,"td"),o.Hc(6),o.Vb(),o.Wb(7,"td"),o.Hc(8),o.Vb(),o.Wb(9,"td"),o.Hc(10),o.Vb(),o.Wb(11,"td"),o.Hc(12),o.Vb(),o.Wb(13,"td"),o.Hc(14),o.Vb(),o.Wb(15,"td"),o.Hc(16),o.Vb(),o.Wb(17,"td",8),o.Wb(18,"button",11),o.gc("click",function(){o.zc(t);const n=e.$implicit;return o.kc(2).uploadFile(n)}),o.Hc(19,"Upload"),o.Vb(),o.Wb(20,"button",11),o.gc("click",function(){o.zc(t);const n=e.$implicit,a=e.index;return o.kc(2).productDetail(n,a)}),o.Hc(21,"Edit"),o.Vb(),o.Wb(22,"button",12),o.gc("click",function(){o.zc(t);const n=e.index;return o.kc(2).deleteProduct(n)}),o.Hc(23),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=e.$implicit,n=e.index,a=o.kc(2);o.Db(2),o.pc("ngIf",""!=t.url),o.Db(2),o.Ic(n+1),o.Db(2),o.Ic(t.title),o.Db(2),o.Ic(t.author),o.Db(2),o.Ic(t.publisher),o.Db(2),o.Ic(t.year),o.Db(2),o.Ic(t.isbn),o.Db(2),o.Ic(t.price),o.Db(6),o.pc("disabled",a.loadingDelete[n]),o.Db(1),o.Ic(a.loadingDelete[n]?"Menghapus..":"Delete")}}function O(t,e){if(1&t){const t=o.Xb();o.Wb(0,"mat-card"),o.Wb(1,"mat-card-header"),o.Wb(2,"mat-card-title"),o.Hc(3),o.Vb(),o.Vb(),o.Wb(4,"mat-card-content"),o.Wb(5,"div",4),o.Rb(6,"span",5),o.Wb(7,"button",6),o.gc("click",function(){return o.zc(t),o.kc().productDetail({},-1)}),o.Hc(8,"Tambah Produk"),o.Vb(),o.Vb(),o.Wb(9,"table",7),o.Wb(10,"thead"),o.Rb(11,"th"),o.Wb(12,"th"),o.Hc(13,"No"),o.Vb(),o.Wb(14,"th"),o.Hc(15,"Judul"),o.Vb(),o.Wb(16,"th"),o.Hc(17,"Penulis"),o.Vb(),o.Wb(18,"th"),o.Hc(19,"Penerbit"),o.Vb(),o.Wb(20,"th"),o.Hc(21,"Tahun Terbit"),o.Vb(),o.Wb(22,"th"),o.Hc(23,"ISBN"),o.Vb(),o.Wb(24,"th"),o.Hc(25,"Harga"),o.Vb(),o.Wb(26,"th",8),o.Hc(27,"#"),o.Vb(),o.Vb(),o.Wb(28,"tbody"),o.Rb(29,"tr"),o.Fc(30,F,24,10,"tr",9),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=o.kc();o.Db(3),o.Ic(t.title),o.Db(27),o.pc("ngForOf",t.books)}}const R=[{path:"",component:p,children:[{path:"dashboard",component:g},{path:"gallery",component:h},{path:"images",component:f},{path:"product",component:(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loadingDelete={},this.title="Produk",this.getBooks()}ngOnInit(){}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat mengambil data")})}productDetail(t,e){this.dialog.open(H,{width:"400px",data:t}).afterClosed().subscribe(t=>{t&&(-1==e?this.books.push(t):this.books[e]=t)})}deleteProduct(t){confirm("Delete item?")&&this.api.delete("books/"+this.books[t].id).subscribe(e=>{this.books.splice(t,1),this.loadingDelete[t]=!1},e=>{alert("Tidak dapat menghapus data"),this.loadingDelete[t]=!1})}uploadFile(t){this.dialog.open(V,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){W.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(m.b),o.Qb(i.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-table-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-table-middle",2,"height","300px"],["diameter","30"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(o.Fc(0,I,2,0,"div",0),o.Fc(1,O,31,2,"mat-card",1)),2&t&&(o.pc("ngIf",e.loading),o.Db(1),o.pc("ngIf",!e.loading))},directives:[a.l,D.b,x.a,x.c,x.e,x.b,b.a,a.k,r.a],styles:[""]}),t})()},{path:"",redirectTo:"/admin/dashboard",pathMatch:"full"}]}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[a.c,c.c.forChild(R),k.a,y.e]]}),t})()}}]);
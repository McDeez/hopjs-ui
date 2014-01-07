module.exports=function(Hop){

  Hop.defineUI=function(app, path){
    path = path || "/ui";
    app.get(path),function(req,res){
      var apiChecksum = (Hop.checksum());
      if(req.get("If-Non-Match")==apiChecksum){
        return res.send("Not modified",304);
      }
      fs.readFile(path.join(__dirname,"../static/ui.comb"),function(err,data){
        try {
          var template = Fire.compile(data.toString());
          res.set('Content-Type', 'text/html');
          res.set("ETag",apiChecksum);  
          res.send(template({ Hop: Hop, _csrf: (req.session?req.session._csrf:undefined) }));
        } catch(e){
          Hop.error("Error parsing doc template",e.stack);
          res.send(500,"Error:"+e.toString());
        }
      });
    });
  }
}

var express = require('express');
var router = express.Router();

const data=[];
/* GET home page. */
router.get('/get-data', function(req, res, next) {
  res.json(data);
});


router.post('/add-data',function(req,res,next){
  const {id,name,mobileNO,mailId}=req.body;
  const appendData=[];
  appendData.push(id);
  appendData.push(name);
  appendData.push(mobileNO);
  appendData.push(mailId);
  data.push(appendData);
  res.send('Data added successfully');
});

router.put('/update-data',function(req,res,next){
  const body=req.body
  const currentData=data[id-1];
  for(i=0;i<currentData.length;i++){
    if(currentData[i]!=body[i]){
      currentData[i]=body[i];
    }
  }
});

router.delete('/delete-data',function(req,res,next){
  const id=req.body.id;
  const currentData=data[id];
  data.splice(id,id+1);
});

module.exports = router;

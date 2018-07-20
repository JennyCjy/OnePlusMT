const collectionName = "log";
module.exports = function (app, db) {
    app.post('/log', (req, res) => {
        const newValue = req.body;
        db.collection("log").insertOne(newValue, function(err, result) {
            if (err) {
                res.send(err);
                throw err;
            }
            res.send(result.ops[0]);
        });
    });

    app.post('/logs',(req, res)=>{

    });

    app.get('/log',(req, res)=>{
        
    });

    app.get('/log/:id',(req, res)=>{
        
    });

    app.put('/log/:id',(req, res)=>{

    });

    app.delete('/log/:id',(req, res)=>{

    });
}
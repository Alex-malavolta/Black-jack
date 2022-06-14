
const express=require('express');
const socketIO=require('socket.io');
const http=require('http')
const port=process.env.PORT||8080
var app=express();
let server = http.createServer(app);
var io=socketIO(server);
var mysql = require('mysql');
const fs = require("fs");

let c1 ={nome:"asso_cuori",valore:11,path:"immagini/c1.JPG"}
let c1_10 ={nome:"asso_cuori",valore:11,path:"immagini/c1.JPG"}
let c2 ={nome:"due_cuori",valore:2,path:"immagini/c2.JPG"}
let c3 ={nome:"tre_cuori",valore:3,path:"immagini/c3.JPG"}
let c4 ={nome:"quattro_cuori",valore:4,path:"immagini/c4.JPG"}
let c5 ={nome:"cinque_cuori",valore:5,path:"immagini/c5.JPG"}
let c6 ={nome:"sei_cuori",valore:6,path:"immagini/c6.JPG"}
let c7 ={nome:"sette_cuori",valore:7,path:"immagini/c7.JPG"}
let c8 ={nome:"otto_cuori",valore:8,path:"immagini/c8.JPG"}
let c9 ={nome:"nove_cuori",valore:9,path:"immagini/c9.JPG"}
let c10 ={nome:"dieci_cuori",valore:10,path:"immagini/c10.JPG"}
let cj ={nome:"jack_cuori",valore:10,path:"immagini/cj.JPG"}
let cq ={nome:"donna_cuori",valore:10,path:"immagini/cq.JPG"}
let ck ={nome:"kappa_cuori",valore:10,path:"immagini/ck.JPG"}


let q1 ={nome:"asso_quadri",valore:11,path:"immagini/q1.JPG"}
let q1_10 ={nome:"asso_quadri",valore:11,path:"immagini/q1.JPG"}
let q2 ={nome:"due_quadri",valore:2,path:"immagini/q2.JPG"}
let q3 ={nome:"tre_quadri",valore:3,path:"immagini/q3.JPG"}
let q4 ={nome:"quattro_quadri",valore:4,path:"immagini/q4.JPG"}
let q5 ={nome:"cinque_quadri",valore:5,path:"immagini/q5.JPG"}
let q6 ={nome:"sei_quadri",valore:6,path:"immagini/q6.JPG"}
let q7 ={nome:"sette_quadri",valore:7,path:"immagini/q7.JPG"}
let q8 ={nome:"otto_quadri",valore:8,path:"immagini/q8.JPG"}
let q9 ={nome:"nove_quadri",valore:9,path:"immagini/q9.JPG"}
let q10 ={nome:"dieci_quadri",valore:10,path:"immagini/q10.JPG"}
let qj ={nome:"jack_quadri",valore:10,path:"immagini/qj.JPG"}
let qq ={nome:"donna_quadri",valore:10,path:"immagini/qq.JPG"}
let qk ={nome:"kappa_quadri",valore:10,path:"immagini/qk.JPG"}


let p1 ={nome:"asso_picche",valore:11,path:"immagini/p1.JPG"}
let p1_10 ={nome:"asso_picche",valore:11,path:"immagini/p1.JPG"}
let p2 ={nome:"due_picche",valore:2,path:"immagini/p2.JPG"}
let p3 ={nome:"tre_picche",valore:3,path:"immagini/p3.JPG"}
let p4 ={nome:"quattro_picche",valore:4,path:"immagini/p4.JPG"}
let p5 ={nome:"cinque_picche",valore:5,path:"immagini/p5.JPG"}
let p6 ={nome:"sei_picche",valore:6,path:"immagini/p6.JPG"}
let p7 ={nome:"sette_picche",valore:7,path:"immagini/p7.JPG"}
let p8 ={nome:"otto_picche",valore:8,path:"immagini/p8.JPG"}
let p9 ={nome:"nove_picche",valore:9,path:"immagini/p9.JPG"}
let p10 ={nome:"dieci_picche",valore:10,path:"immagini/p10.JPG"}
let pj ={nome:"jack_picche",valore:10,path:"immagini/pj.JPG"}
let pq ={nome:"donna_picche",valore:10,path:"immagini/pq.JPG"}
let pk ={nome:"kappa_picche",valore:10,path:"immagini/pk.JPG"}

let f1 ={nome:"asso_fiori",valore:11,path:"immagini/f1.JPG"}
let f1_10 ={nome:"asso_fiori",valore:11,path:"immagini/f1.JPG"}
let f2 ={nome:"due_fiori",valore:2,path:"immagini/f2.JPG"}
let f3 ={nome:"tre_fiori",valore:3,path:"immagini/f3.JPG"}
let f4 ={nome:"quattro_fiori",valore:4,path:"immagini/f4.JPG"}
let f5 ={nome:"cinque_fiori",valore:5,path:"immagini/f5.JPG"}
let f6 ={nome:"sei_fiori",valore:6,path:"immagini/f6.JPG"}
let f7 ={nome:"sette_fiori",valore:7,path:"immagini/f7.JPG"}
let f8 ={nome:"otto_fiori",valore:8,path:"immagini/f8.JPG"}
let f9 ={nome:"nove_fiori",valore:9,path:"immagini/f9.JPG"}
let f10 ={nome:"dieci_fiori",valore:10,path:"immagini/f10.JPG"}
let fj ={nome:"jack_fiori",valore:10,path:"immagini/fj.JPG"}
let fq ={nome:"donna_fiori",valore:10,path:"immagini/fq.JPG"}
let fk ={nome:"kappa_fiori",valore:10,path:"immagini/fk.JPG"}

var carte=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,cj,cq,ck,q1,q2,
  q3,q4,q5,q6,q7,q8,q9,q10,qj,qq,qk,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,pj,pq,pk,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,fj,fq,fk]

const carte_dagioco = carte;



var onlineUser = [];

var room_list = ['stanza 1','stanza 2','stanza 3']
var iteratore =52;
var mazzo1;
var mazzo2;
var mazzo3;
let p ={nome:"posteriore",valore:0,path:"immagini/posteriore.jpg"}

function dbConnection() {
  connection = mysql.createConnection({
  host: 'mysql-black-jack.alwaysdata.net',
  user: '266327_1',
  password: 'Password_black',
  database: 'black-jack_00'
});
connection.connect(function (error) {
  if (!!error) {
      console.log('Server - Error connession to db');
  } else {
      console.log('Server - Connected to db');
  }
});
}

function appAndFileSetting()
{
  console.log("Server - setting app and files...");
  app.use(express.static(__dirname + "/"));
  app.use(express.static(__dirname + "/node_modules/"));
  app.get("/", (req, res) => {
    const stream = fs.createReadStream(__dirname + "/client.html");
    stream.pipe(res);
  });
}

function mescola(array) {
  //Ci prendiamo la lunghezza dell'array e partiamo dal fondo!
  var currentIndex = array.length, temporaryValue, randomIndex;
  // Finché ci sono elementi da mescolare, iteriamo l'array
  while (0 !== currentIndex) {
    //Prendiamo un indice a caso dell'array, purché sia compreso tra 0 e la lunghezza dell'array
    randomIndex = Math.floor(Math.random() * currentIndex);
    //Riduciamo di un'unità l'indice corrente
    currentIndex -= 1;
    // Una volta che abbiamo preso l'indice casuale, invertiamo l'elemento che stiamo analizzando alla posizione corrente (currentIndex) con quello alla posizione presa casualmente (randomIndex)
    //Variabile temporanea
    temporaryValue = array[currentIndex];
    //Eseguiamo lo scambio
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  //Torniamo l'array mescolato a fine ciclo
  return array;
}


function mischiamazzi(){
    mazzo1 = mescola(carte_dagioco.concat(carte_dagioco)); 
    mazzo2 = mescola(carte_dagioco.concat(carte_dagioco)); 
    mazzo3 = mescola(carte_dagioco.concat(carte_dagioco)); 
   iteratore=103
   
}
/*
app.get('/', function (req, res) {
    res.sendFile('client.html',{root: __dirname})
})*/
appAndFileSetting();

dbConnection();

mischiamazzi();
// make connection with user from server side
io.on('connection', (socket)=>{
  console.log('New user connected');

  socket.on('logout', function(ut) {
    
      //elimino l'utente dalla lista degli utenti online
      for (var key in onlineUser) {
        if (onlineUser[key] == ut.text) {
            console.log("Server - Utente: " + key + " ora offline");
            
            delete onlineUser[key];
            
            
        }
    }

    
    //emit message from server to user
    socket.emit('logout', {
  
      text:'logout ok'

      });
  });


//   socket.on('chiusurapag', function(ut) {
    
//     //elimino l'utente dalla lista degli utenti online
//     for (var key in onlineUser) {
//       if (onlineUser[key] == ut.text) {
//           console.log("Server - Utente: " + key + " ora offline");
//           delete onlineUser[key];
          
//       }
//   }

// });
 
  // listen for message from user
  socket.on('login', (loguser)=>{
    console.log('nuovo log');
    var query = "SELECT * FROM Utenti WHERE Username = '" + loguser.user + "' AND Password = '" + loguser.pass + "'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - login : Query error ' + error);
              } else {
                  //utente loggato
                  if (rows.length == 1) {
                      console.log("Server - login : user " + loguser.user + " logged !!");
                      //emit message from server to user
                      socket.emit('login', {
  
                      text:'log ok'
      
                      });
                      
                      onlineUser.push(loguser.user);

      
                  } else {
                      console.log("Server - login : user " + loguser.user + " not exist !!")
                      //utente non loggato
                      //emit message from server to user
                      socket.emit('login', {
                        text:'log errato, riprova'
      
                      });

                  }
              }
          });
   
  });

  // listen for message from user
  socket.on('registrazione', (nuovouser)=>{
    console.log('nuovouser', nuovouser);
    var query = "SELECT * FROM Utenti WHERE Username = '" + nuovouser.user + "'";
          connection.query(query, function(err, rows, field) {
              if (err) {
                  error = err;
                  console.log("Server - signup error : " + err);
                  //emit message from server to user
                  socket.emit('registrazione', {
                  text: err
                  });
              } else {
                if(rows.length==0){
                  var query2 = "INSERT INTO Utenti (Username, Password,Crediti) VALUES ('" + nuovouser.user + "','" + nuovouser.pass + "' , 1000)";
                  connection.query(query2, function(err2, rows2, field2) {
                    if (err) {
                      error = err2;
                      console.log("Server - signup error : " + err);
                      //emit message from server to user
                      socket.emit('registrazione', {
                      text: err
                      });
                  } else {
                    //emit message from server to user
                    socket.emit('registrazione', {
                      text: 'registrazione avvenuta con successo fai la login'
                      });
                  }


                  });

                }else{
                  
                socket.emit('registrazione', {
                  text: 'registrazione non avvenuta,cambia username'
                  });
                }
              }
          });
  });


  socket.on('ricarica', (data)=>{

     var gamer = data.text;
     var cred = data.c;
     var cre;

     var query = "SELECT Crediti FROM Utenti WHERE Username = '" + gamer +"'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - crediti-sconfitta1 : Query error ' + error);
              } else {
                  
                       cre= rows[0].Crediti;
                       
                      var query = "UPDATE `Utenti` SET `Crediti`="+(parseInt(cre)+parseInt(cred))+" WHERE Username='"+gamer+"'";
    
                       //eseguo la query
                      connection.query(query, function(error, rows, field) {
                          if (error) {
                              console.log('Server - crediti-sconfitta2 : Query error ' + error);
                          }else{
                            var fondi=parseInt(cre)+parseInt(cred)

                            socket.emit('select_fish', {
                              text:fondi
                            });
                          }
                

                        }); 

                      
                    }
    


            });   
    

    

    
  });

   
  socket.on('updateList', ()=>{
    onlineUser=onlineUser.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
    
      return false;
    });
    
    socket.emit('updateList', {
      userList: JSON.stringify(onlineUser),
    });
  });
  
  socket.on('updateList_room', ()=>{
    
    socket.emit('updateList_room', {
      
      roomList: JSON.stringify(room_list),
    });
  });

 

  socket.on('select_fish', function(data) { 
    var gamer =data.user;
    var query = "SELECT Crediti FROM Utenti WHERE Username = '" + gamer +"'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - crediti-selectnormale : Query error ' + error);
              } else {
                  
                      var cre= rows[0].Crediti;
                      //emit message from server to user
                      socket.emit('select_fish', {
  
                      text:cre
      
                      });
                      // socket.emit('select_fishs', {
  
                      //   text:cre
        
                      //   });
                    }
    


            });   



  });


  socket.on('giochiamo', function(data) {

    if(iteratore<=5){
      mischiamazzi();
    }
    var nameRoom = data.stan;
    
    socket.join(nameRoom);

    if(nameRoom=="stanza 1"){

      //console.log(mazzo1[3].path)
      socket.emit("carte_mazziere",{

        mazziere_coperta:mazzo1[iteratore].path,
        mazziere_coperta_valore:mazzo1[iteratore].valore,
        mazziere_carta:mazzo1[iteratore-1].path,
        mazziere_carta_valore:mazzo1[iteratore-1].valore,
      });
      
      socket.emit('carte', {
        
        giocatore_carta1:mazzo1[iteratore-2].path,
        giocatore_carta1_valore:mazzo1[iteratore-2].valore,
        giocatore_carta2:mazzo1[iteratore-3].path,
        giocatore_carta2_valore:mazzo1[iteratore-3].valore,


      });
      iteratore=iteratore-4;

      
    

        

    }
    if(nameRoom=="stanza 2"){
       //console.log(mazzo1[3].path)
       socket.emit("carte_mazziere",{

        mazziere_coperta:mazzo2[iteratore].path,
        mazziere_coperta_valore:mazzo2[iteratore].valore,
        mazziere_carta:mazzo2[iteratore-1].path,
        mazziere_carta_valore:mazzo2[iteratore-1].valore,
      });
      
      socket.emit('carte', {
        
        giocatore_carta1:mazzo2[iteratore-2].path,
        giocatore_carta1_valore:mazzo2[iteratore-2].valore,
        giocatore_carta2:mazzo2[iteratore-3].path,
        giocatore_carta2_valore:mazzo2[iteratore-3].valore,


      });
      iteratore=iteratore-4;


    }
    if(nameRoom=="stanza 3"){
       //console.log(mazzo1[3].path)
       socket.emit("carte_mazziere",{

        mazziere_coperta:mazzo3[iteratore].path,
        mazziere_coperta_valore:mazzo3[iteratore].valore,
        mazziere_carta:mazzo3[iteratore-1].path,
        mazziere_carta_valore:mazzo3[iteratore-1].valore,
      });
      
      socket.emit('carte', {
        
        giocatore_carta1:mazzo3[iteratore-2].path,
        giocatore_carta1_valore:mazzo3[iteratore-2].valore,
        giocatore_carta2:mazzo3[iteratore-3].path,
        giocatore_carta2_valore:mazzo3[iteratore-3].valore,


      });
      iteratore=iteratore-4;
      if(iteratore<=5){mischiamazzi()} 

    }

  });

  socket.on('nuova_carta_mazziere1', function(data) {

    socket.emit("nuova_carta_mazziere1",{

      mazziere_coperta:mazzo1[iteratore].path,
      mazziere_coperta_valore:mazzo1[iteratore].valore,
    });
    iteratore=iteratore-1;

  });

  socket.on('nuova_carta_mazziere2', function(data) {

    socket.emit("nuova_carta_mazziere2",{

      mazziere_coperta:mazzo2[iteratore].path,
      mazziere_coperta_valore:mazzo2[iteratore].valore,
    });
    iteratore=iteratore-1;

  });

  socket.on('nuova_carta_mazziere3', function(data) {

    socket.emit("nuova_carta_mazziere3",{

      mazziere_coperta:mazzo3[iteratore].path,
      mazziere_coperta_valore:mazzo3[iteratore].valore,
    });
    iteratore=iteratore-1;

  });

  socket.on('dammiUnaCarta', ()=>{
    
    socket.emit('dammiUnaCartanuova', {
      giocatore_carta:mazzo1[iteratore].path,
      giocatore_carta_valore:mazzo1[iteratore].valore,
    
    });
    iteratore=iteratore-1;
    console.log(iteratore);
    if(iteratore<=5){mischiamazzi()} 
  });
  
  
  socket.on('puntata_persa', function(data) {

    var gamer =data.user;
    var puntata = data.pun;
    var query = "SELECT Crediti FROM Utenti WHERE Username = '" + gamer +"'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - crediti-sconfitta1 : Query error ' + error);
              } else {
                  
                      var cre= rows[0].Crediti;

                      var query = "UPDATE `Utenti` SET `Crediti`="+(cre-puntata)+" WHERE Username='"+gamer+"'";
    
                       //eseguo la query
                      connection.query(query, function(error, rows, field) {
                          if (error) {
                              console.log('Server - crediti-sconfitta2 : Query error ' + error);
                          }
                

                        }); 

                      
                    }
    


            });   
    

    


  });


  socket.on('puntata_vinta', function(data) {

    var gamer =data.user;
    var puntata = data.pun;
    var query = "SELECT Crediti FROM Utenti WHERE Username = '" + gamer +"'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - crediti-vittoria1 : Query error ' + error);
              } else {
                  
                      var cre= rows[0].Crediti;
                      
                      var vittoria = cre+(puntata*2);
                      var query1 = "UPDATE `Utenti` SET `Crediti`="+vittoria+" WHERE Username='"+gamer+"'";
    
                       //eseguo la query
                      connection.query(query1, function(error1) {
                          if (error1) {
                              console.log('Server - crediti-vittoria2 : Query error ' + error1);
                          }else{
                            
                          }
                

                        }); 

                      
                      }
    


            });   
    

    


  });

  socket.on('puntata_vinta_black', function(data) {

    var gamer =data.user;
    var puntata = data.pun;
    var query = "SELECT Crediti FROM Utenti WHERE Username = '" + gamer +"'";

          //eseguo la query
          connection.query(query, function(error, rows, field) {
              if (error) {
                  console.log('Server - crediti : Query error ' + error);
              } else {
                  
                      var cre= rows[0].Crediti;

                      var query1 = "UPDATE `Utenti` SET `Crediti`="+(cre+(puntata*2.5))+" WHERE Username='"+gamer+"'";
    
                       //eseguo la query
                      connection.query(query1, function(error1, rows1, field1) {
                          if (error1) {
                              console.log('Server - crediti : Query error ' + error1);
                          }
                

                        }); 

                      
                      }
    


            });   
    

    


  });

  
});
 
server.listen(port);

var Twitter = require('twitter');

var client = new Twitter(
{
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});
/* search user */
client.get('users/lookup',{screen_name: 'narendramodi ',count: 10}, function(err,data,response){
   const tweets = data;
  // const tweets = data.statuses[].text; 
   
   console.log(tweets);
  })
// Muted users list

client.get('mutes/users/list', function(error, tweets, response) {
  if(error) throw error;
  //console.log(tweets.users);
  var tu= tweets.users.length;
  var i;
  for(i=0;i<tweets.users.length;i++)
  {
  console.log(tweets.users[i]['name']); 
  }
  //console.log(tweets.users[1]['name']);  

  //console.log(response);  // Raw response object.
});

// to tweet

client.post('statuses/update', {status: 'tweet sample using API'}, function(error, tweet, response)
 {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    //console.log(response);  // Raw response object.
});


//follow a friend with specific id or screen_name
client.post('friendships/create', {screen_name : "prernagupta"},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    //console.log(response);  // Raw response object.
  });
  
  
  //following someone's followers
  client.get('followers/ids', {screen_name:"jayachandra116",count:10},function(error, tweets, response) {
    if(error) throw error;
    //console.log(tweets);
    var i;
    for (i=0;i<tweets['ids'].length;i++)
    {
      if (tweets['ids'][i].length == 19)
      {
        client.post('friendships/create', {user_id : tweets['ids'][i]},  function(error, tweet, response) {
          if(error) throw error;
          //console.log(response);  // Raw response object.
    
          console.log(`successfully followed : ${tweets['ids'][i]} `)  // Tweet body.
      
        });
    }
    }
  });
  
 //following a particular person using screen name
 client.post('friendships/create', {screen_name:"elonmusk"},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet)
 })

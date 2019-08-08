<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>chatt</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link href="css/styles.css" rel="stylesheet" type="text/css">

<script src="js/jquery-3.4.1.js"></script>
<script src="js/script.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>
    <div class="well">   
    <div class="container">
  <h2 id="randomchat" >Chat with random strangers</h2>
  <div id="random-chat">
    <div id="chatbox">
      <div id="chatbox1">
          <div id="msg" class="info">
              <p class="text1">Welcome to Picturesque Free Chat Trial. You must be 18+ to start random chat with strangers.</p>
              <p class="text2">How To Chat With Strangers Safely?</p>
              <p class="text3">Don't share any personal information or contacts, don't send any money to strangers.</p>
              <p>Click here to start your random chat:</p>
              
              <p id="start_random"><div><input autofocus="" id="random_name" value="Stranger" maxlength="20"><button class="btn-success" id="start-chat"><span></span>Start Chat</button></div></p>
            </div>
      </div>
    </div>
    
    <div id="chat" >
        <div id="talk">
        <?php
                                include_once('connect/database.php');
                                
                                $sql = 'SELECT * FROM chart';
                                
                                $retval = mysqli_query($conn,$sql);
                                
                                if(! $retval ) {
                                    die('Could not get data: ' . mysqli_error());
                                }
                                
                                while($row = mysqli_fetch_array($retval)) {
                                    
                                    $m=$row['messages'];
                                    echo $m .'<br>';
                                }
                                
                                // echo "Fetched data successfully\n";
                                
                                mysqli_close($conn);
                                ?>
        </div>
        <div id="more" style="top:20%">
            <button id='newChat' class="button button2">New Chat</button>
            <button class="button button3">Request Photo</button>
            <button class="button button4">Report Stranger</button>
        </div>
       
        <form id="send-message-area" action="connect/connet.php" method="POST">
        <button id='plus' class="button">+</button>
        <textarea class="input textarea"rows="4" cols="50" placeholder="Your Message" id="message" name='name'></textarea>
        <input type='submit' class="button button5" id="submit" name='submit' value='send'>
        </form>

        
      </div>
   
      </div>
    </div>

      </div>
</body>
</html>
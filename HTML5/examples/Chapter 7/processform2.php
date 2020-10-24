<html>
   <head>
      <title>Form Processing</title>
   </head>
   <body>
      <form method='get' action='processform2.php'><pre>
             Name: <input type='text'     name='name'     />
            Email: <input type='text'     name='email'    />
         Username: <input type='text'     name='username' />
         Password: <input type='password' name='password' />
                   <input type='submit' value='Submit details' />
      </pre></form>
   </body>
</html>

<?php

if (isset($_GET['name']))
{
   $name     = $_GET['name'];
   $email    = $_GET['email'];
   $username = $_GET['username'];
   $password = $_GET['password'];

   echo "The data you entered was:<ul>" .
        "Name = $name<br />" .
        "Email = $email<br />" .
        "Username = $username<br />" .
        "Password = $password</ul>";
}

?>

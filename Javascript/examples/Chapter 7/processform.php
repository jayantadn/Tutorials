<html>
   <head>
      <title>Form Processing</title>
   </head>
   <body>
      <form method='post' action='processform.php'><pre>
             Name: <input type='text'     name='name'     />
            Email: <input type='text'     name='email'    />
         Username: <input type='text'     name='username' />
         Password: <input type='password' name='password' />
                   <input type='submit' value='Submit details' />
      </pre></form>
   </body>
</html>

<?php

if (isset($_POST['name']))
{
   $name     = $_POST['name'];
   $email    = $_POST['email'];
   $username = $_POST['username'];
   $password = $_POST['password'];

   echo "The data you entered was:<ul>" .
        "Name = $name<br />" .
        "Email = $email<br />" .
        "Username = $username<br />" .
        "Password = $password</ul>";
}

?>

<?php
   $USERNAME = 'OptimusPrime';
   greeting('Welcome');

   function greeting($message)
   {
      global $USERNAME;
      echo $message . ' ' . $USERNAME;
   }
?>
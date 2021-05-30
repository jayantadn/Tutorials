<?php
   echo "11.74 rounded to an integer is " . newround(11.74);

   function newround($value)
   {
      $significand = (int) $value;
      $mantissa    = $value - $significand;
      if ($mantissa > 0.5) return $significand + 1;
      else return $significand;
   }
?>
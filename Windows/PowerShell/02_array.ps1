"basic array"
$arr = 10, 20, 30, 40
$arr

"`nanother syntax of array"
$arr2 = 0..9
$arr2
$arr2[5]
$arr2.Length
$arr2[2..5]

"`nyet another syntax for array"
$arr3 = @(0..9)
$arr3[5] = 50
$arr3

"`nhash table"
$hash = [ordered]@{ id=0; shape="square"; color="red" }
$hash
$hash["color"]
$hash.Keys
$hash.Values
$hash.Count

"`nMore operations on hash"
$hash.Add( "solid", "true" )
$hash.Remove( "shape" )
$hash

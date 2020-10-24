<!--

var today_obj=new Date()
var today_second=today_obj.getSeconds()

var reviews=new Array()

//Configure the below array to hold the 24 possible reviews
reviews[0]='Faheem - Lahore, Pakistan - <em>"This is an excellent site about Excel-VBA."</em>'
reviews[1]='Brian - Tennessee, United States - <em>"This truly is the best VBA website I have visited."</em>'
reviews[2]='James - Vancouver, Canada - <em>"I began to actually understand what I was doing rather than just copying everything into my worksheet."</em>'
reviews[3]='Jesse - Newport Beach, United States - <em>"You have the simplest, most comprehensible material I have found for a VBA beginner."</em>'
reviews[4]='Susan - Chicago, United States - <em>"Thank you so much for the awesome Excel VBA course you have put together!"</em>'
reviews[5]='Seng - Christchurch, New Zealand - <em>"I chose excel-vba-easy over other websites and books because of its easy to follow explanations, logical progression, and examples."</em>'
reviews[6]='Lucio - San Juan, United States - <em>"This website is outstanding for saying the least."</em>'
reviews[7]='Natalia - Sydney, Australia - <em>"There are very few web-sites that are so intuitive and easy to follow!"</em>'
reviews[8]='Michael - Folsom, United States - <em>"The examples that are given provide wonderful, well organized code examples that are true learning tools."</em>'
reviews[9]='Roland - Kaposvar, Hungary - <em>"This page is just fantastic with easy and understandable examples. I found lots of macros very useful."</em>'
reviews[10]='Ying - San Gabriel, United States - <em>"Love the website and the programs. Pave way for a better and deeper understanding on Excel VBA."</em>'
reviews[11]='Low Seng Kuang, Malaysia - <em>"I like your presentation; it is simple, illustrative and easy to understand. Thank you for helping me to learn this new subject."</em>'
reviews[12]='Deniz - Allston, United States - <em>"If you are a Visual Basic beginner, and need to get help fast, you have come to the right place."</em>'
reviews[13]='Richard - San Ramon, United States - <em>"Excel-VBA-Easy.com made learning VBA genuinely easy. The library of examples provide useful practice and lots of ready-to-go solutions. Great job guys!"</em>'
reviews[14]='Tom - Atlanta, United States - <em>"I got a VBAeasy account about a month ago and have learned a ton so far."</em>'

reviews[15]='Faheem - Lahore, Pakistan - <em>"This is an excellent site about Excel-VBA."</em>'
reviews[16]='Brian - Tennessee, United States - <em>"This truly is the best VBA website I have visited."</em>'
reviews[17]='James - Vancouver, Canada - <em>"I began to actually understand what I was doing rather than just copying everything into my worksheet."</em>'
reviews[18]='Jesse - Newport Beach, United States - <em>"You have the simplest, most comprehensible material I have found for a VBA beginner."</em>'
reviews[19]='Susan - Chicago, United States - <em>"Thank you so much for the awesome Excel VBA course you have put together!"</em>'
reviews[20]='Seng - Christchurch, New Zealand - <em>"I chose excel-vba-easy over other websites and books because of its easy to follow explanations, logical progression, and examples."</em>'
reviews[21]='Lucio - San Juan, United States - <em>"This website is outstanding for saying the least."</em>'
reviews[22]='Natalia - Sydney, Australia - <em>"There are very few web-sites that are so intuitive and easy to follow!"</em>'
reviews[23]='Michael - Folsom, United States - <em>"The examples that are given provide wonderful, well organized code examples that are true learning tools."</em>'
reviews[24]='Roland - Kaposvar, Hungary - <em>"This page is just fantastic with easy and understandable examples. I found lots of macros very useful."</em>'
reviews[25]='Ying - San Gabriel, United States - <em>"Love the website and the programs. Pave way for a better and deeper understanding on Excel VBA."</em>'
reviews[26]='Low Seng Kuang, Malaysia - <em>"I like your presentation; it is simple, illustrative and easy to understand. Thank you for helping me to learn this new subject."</em>'
reviews[27]='Deniz - Allston, United States - <em>"If you are a Visual Basic beginner, and need to get help fast, you have come to the right place."</em>'
reviews[28]='Richard - San Ramon, United States - <em>"Excel-VBA-Easy.com made learning VBA genuinely easy. The library of examples provide useful practice and lots of ready-to-go solutions. Great job guys!"</em>'
reviews[29]='Tom - Atlanta, United States - <em>"I got a VBAeasy account about a month ago and have learned a ton so far."</em>'

reviews[30]='Faheem - Lahore, Pakistan - <em>"This is an excellent site about Excel-VBA."</em>'
reviews[31]='Brian - Tennessee, United States - <em>"This truly is the best VBA website I have visited."</em>'
reviews[32]='James - Vancouver, Canada - <em>"I began to actually understand what I was doing rather than just copying everything into my worksheet."</em>'
reviews[33]='Jesse - Newport Beach, United States - <em>"You have the simplest, most comprehensible material I have found for a VBA beginner."</em>'
reviews[34]='Susan - Chicago, United States - <em>"Thank you so much for the awesome Excel VBA course you have put together!"</em>'
reviews[35]='Seng - Christchurch, New Zealand - <em>"I chose excel-vba-easy over other websites and books because of its easy to follow explanations, logical progression, and examples."</em>'
reviews[36]='Lucio - San Juan, United States - <em>"This website is outstanding for saying the least."</em>'
reviews[37]='Natalia - Sydney, Australia - <em>"There are very few web-sites that are so intuitive and easy to follow!"</em>'
reviews[38]='Michael - Folsom, United States - <em>"The examples that are given provide wonderful, well organized code examples that are true learning tools."</em>'
reviews[39]='Roland - Kaposvar, Hungary - <em>"This page is just fantastic with easy and understandable examples. I found lots of macros very useful."</em>'
reviews[40]='Ying - San Gabriel, United States - <em>"Love the website and the programs. Pave way for a better and deeper understanding on Excel VBA."</em>'
reviews[41]='Low Seng Kuang, Malaysia - <em>"I like your presentation; it is simple, illustrative and easy to understand. Thank you for helping me to learn this new subject."</em>'
reviews[42]='Deniz - Allston, United States - <em>"If you are a Visual Basic beginner, and need to get help fast, you have come to the right place."</em>'
reviews[43]='Richard - San Ramon, United States - <em>"Excel-VBA-Easy.com made learning VBA genuinely easy. The library of examples provide useful practice and lots of ready-to-go solutions. Great job guys!"</em>'
reviews[44]='Tom - Atlanta, United States - <em>"I got a VBAeasy account about a month ago and have learned a ton so far."</em>'

reviews[45]='Faheem - Lahore, Pakistan - <em>"This is an excellent site about Excel-VBA."</em>'
reviews[46]='Brian - Tennessee, United States - <em>"This truly is the best VBA website I have visited."</em>'
reviews[47]='James - Vancouver, Canada - <em>"I began to actually understand what I was doing rather than just copying everything into my worksheet."</em>'
reviews[48]='Jesse - Newport Beach, United States - <em>"You have the simplest, most comprehensible material I have found for a VBA beginner."</em>'
reviews[49]='Susan - Chicago, United States - <em>"Thank you so much for the awesome Excel VBA course you have put together!"</em>'
reviews[50]='Seng - Christchurch, New Zealand - <em>"I chose excel-vba-easy over other websites and books because of its easy to follow explanations, logical progression, and examples."</em>'
reviews[51]='Lucio - San Juan, United States - <em>"This website is outstanding for saying the least."</em>'
reviews[52]='Natalia - Sydney, Australia - <em>"There are very few web-sites that are so intuitive and easy to follow!"</em>'
reviews[53]='Michael - Folsom, United States - <em>"The examples that are given provide wonderful, well organized code examples that are true learning tools."</em>'
reviews[54]='Roland - Kaposvar, Hungary - <em>"This page is just fantastic with easy and understandable examples. I found lots of macros very useful."</em>'
reviews[55]='Ying - San Gabriel, United States - <em>"Love the website and the programs. Pave way for a better and deeper understanding on Excel VBA."</em>'
reviews[56]='Low Seng Kuang, Malaysia - <em>"I like your presentation; it is simple, illustrative and easy to understand. Thank you for helping me to learn this new subject."</em>'
reviews[57]='Deniz - Allston, United States - <em>"If you are a Visual Basic beginner, and need to get help fast, you have come to the right place."</em>'
reviews[58]='Richard - San Ramon, United States - <em>"Excel-VBA-Easy.com made learning VBA genuinely easy. The library of examples provide useful practice and lots of ready-to-go solutions. Great job guys!"</em>'
reviews[59]='Tom - Atlanta, United States - <em>"I got a VBAeasy account about a month ago and have learned a ton so far."</em>'

document.write(reviews[today_second])

//-->
BEGIN { print "--- start ---" }
/.conf$/ { print $0 }
END { print "--- end ---" }
